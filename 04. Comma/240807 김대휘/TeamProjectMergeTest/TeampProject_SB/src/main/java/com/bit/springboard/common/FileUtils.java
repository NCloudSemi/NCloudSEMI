package com.bit.springboard.common;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.util.Date;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.UUID;

public class FileUtils {

    //save IMG
    public static String saveFile(MultipartFile multipartFile, String attachPath) {
        // 다른 사용자가 같은 파일명의 파일을 업로드 했을 때
        // 덮어써지는 것을 방지하기 위해서 파일명을 랜덤값_날짜시간_파일명으로 지정
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
        Date nowDate = new Date();
        String nowDateStr = format.format(nowDate);
        UUID uuid = UUID.randomUUID();
        String fileName =  uuid.toString() + "_" + nowDateStr + "_" + multipartFile.getOriginalFilename();
        File uploadFile = new File(attachPath + fileName);
        try {
            multipartFile.transferTo(uploadFile);
        } catch(IOException ie) {
            System.out.println(ie.getMessage());
        }
        return fileName;
    }
}
