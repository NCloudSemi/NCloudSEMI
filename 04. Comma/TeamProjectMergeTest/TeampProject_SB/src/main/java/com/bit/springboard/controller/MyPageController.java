package com.bit.springboard.controller;

import com.bit.springboard.dto.UserDto;
import com.bit.springboard.service.MyPageService;
import com.bit.springboard.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
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
    public String showMyPage(HttpSession session, Model model) {
        // 세션에서 사용자 정보 가져오기
        UserDto loginUser = (UserDto) session.getAttribute("loginUser");
        System.out.println("controller.showMyPage 메소드의 " + loginUser);
        if (loginUser == null) {
            model.addAttribute("errorMessage", "로그인이 필요합니다.");
            return "errorPage"; // 로그인 페이지로 리다이렉트하도록 변경할 수도 있습니다.
        }

        try {
            // 로그인한 사용자 정보 가져오기
            UserDto updatedUser = userService.findById(loginUser);
            // 세션에 사용자 정보 저장
            session.setAttribute("loginUser", updatedUser);

            return "/mypage/mypage";
        } catch (Exception e) {
            model.addAttribute("errorMessage", e.getMessage());
            return "errorPage"; // 적절한 오류 페이지로 이동
        }
    }

    @RequestMapping("/uploadProfileImage.do")
    @ResponseBody
    public Map<String, Object> uploadProfileImage(@RequestParam("file") MultipartFile file, HttpSession session, HttpServletRequest request) {

        System.out.println("controller.uploadProfileImage 메소드 실행");
        Map<String, Object> returnMap = new HashMap<>();

        try {
            // 파일 저장 로직
            String fileName = saveFile(file, request); // 서버에 파일 저장
            System.out.println("Saved file name: " + fileName);

            // 세션에서 로그인된 사용자 정보 가져오기
            UserDto loginUser = (UserDto) session.getAttribute("loginUser");

            // 사용자 객체에 새 프로필 이미지 경로 설정
            loginUser.setProfile_img(fileName);
            System.out.println(fileName);

            // 데이터베이스에 프로필 이미지 경로 업데이트
            userService.updateProfileImage(loginUser);

            // json 형태로 리턴될 맵에 데이터 추가
            returnMap.put("userProfile", loginUser);

            return returnMap;
        } catch (Exception e) {
            // 로그에 예외 출력
            e.printStackTrace();

            returnMap.put("errorMessage", e.getMessage());
            return returnMap;
        }
    }

    private String saveFile(MultipartFile file, HttpServletRequest request) throws IOException {
        String serverPath = request.getServletContext().getRealPath("/");
        // 파일 저장 경로 설정
        String uploadDir = serverPath + "\\static\\savedProfileImg";

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
            @RequestParam("address") String address,
            @RequestParam("detailed_address") String detailed_address, HttpSession session) {

        UserDto loginUser = (UserDto) session.getAttribute("loginUser");
        if (loginUser == null) {
            return "redirect:/login"; // 로그인 페이지로 리다이렉트
        }

        UserDto userDto = new UserDto();
        userDto.setUser_id(loginUser.getUser_id()); // 세션에서 가져온 user_id 설정
        userDto.setNickname(nickname);
        userDto.setAddress(address);
        userDto.setDetailed_address(detailed_address);

        loginUser.setNickname(nickname);
        loginUser.setAddress(address);
        loginUser.setDetailed_address(detailed_address);

        userService.updateUserInformation(userDto);
        System.out.println("controller의 changeUserInfo 메소드의 " + userService.updateUserInformation(userDto));
        session.setAttribute("loginUser", loginUser);
        return "redirect:/mypage/main"; // 리다이렉트할 경로
    }

    @RequestMapping("/changeUserStatusMessage.do")
    public String changeUserStatusmessage(@RequestParam("message") String message, HttpSession session) {
        // 변경된 내용이 있으면 session에도 변경된 내용을 저장하고 다시 호출해야한다.
        UserDto loginUser = (UserDto)session.getAttribute("loginUser");
        UserDto userDto = new UserDto();
        userDto.setMessage(message);
        loginUser.setMessage(message);
        System.out.println(userDto.getMessage());

        userService.updateStatusMessage(userDto);
        session.setAttribute("loginUser", loginUser);
        return "redirect:/mypage/main";
    }

}
