package com.bit.springboard.controller;

import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.MyPageService;
import com.bit.springboard.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Controller
@RequestMapping("/mypage")
public class MyPageController {

    private MyPageService myPageService;
    private UserService userService;
    private UserDto userDto;

    @Autowired
    public MyPageController(MyPageService myPageService, UserService userService){
        this.myPageService = myPageService;
        this.userService = userService;
    }

    @GetMapping("/main")
    public String showMyPage(HttpSession session) {
        // 로그인한 사용자 정보 가져오기
        UserDto loginMember = userService.getUser();

        // 세션에 사용자 정보 저장
        session.setAttribute("loginMember", loginMember);

        // 변경된 사용자 정보 다시 로드
        UserDto updatedUser = userService.getUser(); // 로그인한 사용자 정보 가져오기
        session.setAttribute("loginMember", loginMember);

        return "/mypage";
    }

//    @RequestMapping("/change-nickname.do")
//    public String changeNickname(@ModelAttribute UserDto userDto, Model model) {
//
//        model.addAttribute("user", userDto.getUser_id());
//
//        try {
//            String result = userService.changeNickname(userDto);
//
//        } catch (IllegalArgumentException e) {
//            System.out.println(e.getMessage());
//        }
//        return "redirect:/mypage/main";
//    }

    @RequestMapping("/uploadProfileImage.do")
    @ResponseBody
    public Map<String, Object> uploadProfileImage(@RequestParam("file") MultipartFile file, HttpSession session) {

        System.out.println("uploadProfileImage 메소드 실행");
        Map<String, Object> returnMap = new HashMap<>();

        try {
            // 파일 저장 로직
            String fileName = saveFile(file); // 서버에 파일 저장
            System.out.println("Saved file name: " + fileName);

            // 세션에서 로그인된 사용자 정보 가져오기
            UserDto loginMember = (UserDto) session.getAttribute("loginMember");
            System.out.println(loginMember);

            // 사용자 객체에 새 프로필 이미지 경로 설정
            loginMember.setProfile_img(fileName);
            System.out.println(fileName);

            // 데이터베이스에 프로필 이미지 경로 업데이트
            userService.updateProfileImage(loginMember);
            System.out.println(loginMember);

            // json 형태로 리턴될 맵에 데이터 추가
            returnMap.put("userProfile", loginMember);

            return returnMap;
        } catch (Exception e) {
            // 로그에 예외 출력
            e.printStackTrace();

            returnMap.put("errorMessage", e.getMessage());
            return returnMap;
        }
    }

    private String saveFile(MultipartFile file) throws IOException {
        // 파일 저장 경로 설정
        String uploadDir = "D:\\lecture\\NcloudSEMI\\04. Comma\\0731 이주성\\TeampProject_SB\\src\\main\\webapp\\static\\savedProfileImg";

        // 디렉토리가 존재하지 않을 경우 생성
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // 파일 이름 생성 (고유한 이름을 위해 UUID 사용)
        String originalFilename = file.getOriginalFilename();
        String fileExtension = "";
        int lastIndex = originalFilename.lastIndexOf('.');
        if (lastIndex > 0) {
            fileExtension = originalFilename.substring(lastIndex);
        }
        String fileName = UUID.randomUUID().toString() + fileExtension;
        Path path = Paths.get(uploadDir, fileName);

        // 파일 저장
        Files.write(path, file.getBytes());

        return fileName;
    }

    @RequestMapping("/changeUserInfo.do")
    public String changeUserInfo(
            @RequestParam("nickname") String nickname,
            @RequestParam("address") String address) {

        UserDto userDto = new UserDto();
        userDto.setNickname(nickname);
        userDto.setAddress(address);

        userService.updateUserInformation(userDto);
        return "redirect:/mypage/main"; // 리다이렉트할 경로
    }


}
