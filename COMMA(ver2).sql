CREATE TABLE `USER` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '사용자 정보를 저장하기 위한 id',
    `pw` VARCHAR(60) NOT NULL COMMENT '특수문자 + 영어 대문자 각 1개 포함 + 최소 8글자',
    `nickname` VARCHAR(20) UNIQUE NOT NULL COMMENT '최대 10자 + 공백 금지',
    `gender` ENUM('MALE', 'FEMALE') NOT NULL COMMENT '성별 - 남성/여성(1택)',
    `address` VARCHAR(255) NOT NULL COMMENT '약식 주소 - 예) 부산광역시/경기도',
    `detailed_address` VARCHAR(255) NOT NULL COMMENT '상세 주소 - 예) 해운대구/수원시',
    `profile_img` VARCHAR(1000) NOT NULL COMMENT '프로필 사진 url',
    `score` INT NOT NULL DEFAULT 0 COMMENT '사용자 여행 기록 작성 수(등급 반영)',
    `message` VARCHAR(255) NULL DEFAULT '회원님을 표현해주세요.' COMMENT '사용자가 값을 입력하지 않을 수 있음',
    `email` VARCHAR(100) NOT NULL COMMENT '사용자 이메일 id + 공백 금지',
    PRIMARY KEY (`id`)
);

CREATE TABLE `RANK` (
    `rank_id` INT AUTO_INCREMENT NOT NULL COMMENT '등급 정보 저장을 위한 id',
    `rank_name` VARCHAR(50) NOT NULL COMMENT '등급명',
    `score_cri` INT NOT NULL COMMENT '사용자 ID로 불러온 점수와 기준 점수 비교 필요',
    `rank_icon` VARCHAR(1000) NOT NULL DEFAULT '기본 등급 아이콘 url' COMMENT '➡️ 등급별 아이콘 url 적용',
    PRIMARY KEY (`rank_id`)
);

CREATE TABLE `POST` (
    `post_id` INT AUTO_INCREMENT NOT NULL COMMENT '게시글 정보 저장을 위한 id',
    `id` INT NOT NULL COMMENT '-- 게시글 작성자 id 정보',
    `title` VARCHAR(60) NOT NULL COMMENT '최대 30자 제한(공백 포함)',
    `content` VARCHAR(500) NOT NULL COMMENT '최대 250자 제한(공백 포함)',
    `plan_id` INT NULL COMMENT '여행 계획 정보 저장을 위한 id ---- 여행계획 db 만들면 foreign키로 잡아줘야 함',
    `like_cnt` INT NULL DEFAULT 0 COMMENT '게시글 좋아요의 수를 확인',
    `reg_date` DATETIME NOT NULL COMMENT '게시글 작성 일자(최신순 정렬을 위함)',
    `post_img` VARCHAR(1000) COMMENT '게시글 작성 시, 넣을 사진 url'
    PRIMARY KEY (`post_id`)
);

CREATE TABLE `COMMENT` (
    `comment_id` INT AUTO_INCREMENT NOT NULL COMMENT '댓글 정보 저장을 위한 id',
    `post_id` INT NOT NULL COMMENT '게시글 정보 저장을 위한 id',
    `id` INT NOT NULL COMMENT '-- 댓글 작성자 id 정보',
    `comment_content` VARCHAR(255) NULL DEFAULT ' ' COMMENT '최대 125자 제한(공백 포함)',
    `comment_tag` VARCHAR(20) NULL DEFAULT ' ' COMMENT '태그된 사용자 닉네임',
    `like_cnt` INT NULL DEFAULT 0 COMMENT '댓글 좋아요의 수를 확인',
    `reg_date` DATETIME NOT NULL COMMENT '댓글 작성 일자(최신순 정렬을 위함)',
    PRIMARY KEY (`comment_id`)
);

CREATE TABLE `REPLY` (
    `reply_id` INT AUTO_INCREMENT NOT NULL COMMENT '대댓글 정보 저장을 위한 id',
    `comment_id` INT NOT NULL COMMENT '댓글 정보 저장을 위한 id',
    `id` INT NOT NULL COMMENT '사용자 정보를 저장하기 위한 id',
    `reply_content` VARCHAR(255) NULL DEFAULT ' ' COMMENT '최대 125자 제한(공백 포함)',
    `reply_tag` VARCHAR(20) NULL DEFAULT ' ' COMMENT '태그된 사용자 닉네임',
    `like_cnt` INT NULL DEFAULT 0 COMMENT '대댓글 좋아요의 수를 확인',
    `reg_date` DATETIME NOT NULL COMMENT '대댓글 작성 일자(최신순 정렬을 위함)',
    PRIMARY KEY (`reply_id`)
);

CREATE TABLE `USER_TAG` (
    `user_tag_id` INT AUTO_INCREMENT NOT NULL COMMENT '태그 정보 저장을 위한 id',
    `comment_id` INT NOT NULL COMMENT '댓글 정보 저장을 위한 id',
    `reply_id` INT NOT NULL COMMENT '대댓글 정보 저장을 위한 id',
    `id` VARCHAR(60) NOT NULL COMMENT '-- 사용자 이메일 id 정보',
    PRIMARY KEY (`user_tag_id`)
);

CREATE TABLE `LIKE` (
    `like_id` INT AUTO_INCREMENT NOT NULL COMMENT '좋아요 정보 저장을 위한 id',
    `id` INT NOT NULL COMMENT '사용자 정보를 저장하기 위한 id',
    `post_id` INT NOT NULL COMMENT '게시글 정보 저장을 위한 id',
    `comment_id` INT NOT NULL COMMENT '댓글 정보 저장을 위한 id',
    `reply_id` INT NOT NULL COMMENT '대댓글 정보 저장을 위한 id',
    `location_id` INT NOT NULL COMMENT '게시글 정보 저장을 위한 id',
    PRIMARY KEY (`like_id`)
);

CREATE TABLE `LOCATION` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '게시글 정보 저장을 위한 id',
    `location_name` VARCHAR(200) NOT NULL COMMENT '오락시설/숙박업소/식당 등의 상호명',
    `cover_img_url` VARCHAR(1000) NULL COMMENT '대표 썸네일 사진 url',
    `cost` INT NULL DEFAULT 0 COMMENT '평균 가격 - 예) 20,000 ~  30,000 등 정수형으로 저장',
    `like_cnt` INT NULL DEFAULT 0 COMMENT '장소 좋아요의 수를 확인',
    `grade` DOUBLE NULL DEFAULT 0 COMMENT '장소 별점 확인',
    `grade_cnt` INT NULL DEFAULT 0 COMMENT '장소 별점의 수를 확인',
    `open_info` VARCHAR(200) NULL DEFAULT '영업 시간 정보가 없습니다.' COMMENT '장소의 영업 시간',
    `certification` VARCHAR(200) NULL DEFAULT ' ' COMMENT '인증 조건이 추가되면 db 추가 필요',
    `x` DOUBLE NULL COMMENT '장소의 x 좌표값',
    `y` DOUBLE NULL COMMENT '장소의 y 좌표값',
    PRIMARY KEY (`id`)
);

CREATE TABLE `LOCATION_OPTION` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '장소 옵션 정보 저장을 위한 id',
    `location_id` INT NOT NULL COMMENT '게시글 정보 저장을 위한 id',
    `option_img` VARCHAR(1000) NULL COMMENT '원본 이름: option_img_url',
    `option_cost` INT NULL DEFAULT 0 COMMENT '평균 가격 - 예) 20,000 ~  30,000 등 정수형으로 저장',
    `option_name` VARCHAR(50) NULL DEFAULT '옵션 정보가 없습니다.' COMMENT '옵션 이름 정보',
    PRIMARY KEY (`id`)
);

CREATE TABLE `RESERVATIONS` (
    `reservation_id` INT AUTO_INCREMENT NOT NULL,
    `id` INT NOT NULL COMMENT '사용자 정보를 저장하기 위한 id',
    `location_id` INT NOT NULL COMMENT '게시글 정보 저장을 위한 id - 예약장소명 값 불러오기',
    `payment_status` VARCHAR(50) NULL DEFAULT '예약 정보가 없습니다.' COMMENT '결제 현황에 대한 정보 확인',
    `reservation_num` VARCHAR(100) NULL DEFAULT '예약 정보가 없습니다.' COMMENT '10자리 숫자 5개 + 영어 대문자 5개 랜덤 값으로 예약번호 주기',
    `reservation_date` DATETIME NULL COMMENT '예약 날짜 확인',
    PRIMARY KEY (`reservation_id`)
);

CREATE TABLE `CRI` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '장소 기준점 정보 저장을 위한 id',
    `X` DOUBLE NOT NULL COMMENT 'X 좌표',
    `Y` DOUBLE NOT NULL COMMENT 'Y좌표',
    PRIMARY KEY (`id`)
);

CREATE TABLE `LOCATION_REVIEW` (
    `review_id` INT AUTO_INCREMENT NOT NULL COMMENT '장소 후기 정보 저장을 위한 id',
    `id` INT NOT NULL COMMENT '-- 작성자 id',
    `location_id` INT NOT NULL COMMENT '별점 불러와야 함',
    `comment` TEXT NULL COMMENT '-- 후기 내용은 필수값으로 해야 할 듯...?',
    `date` DATETIME NOT NULL COMMENT '후기 등록 날짜',
    PRIMARY KEY (`review_id`)
);

CREATE TABLE `LOCATION_TAG` (
    `id` INT AUTO_INCREMENT NOT NULL COMMENT '장소 기준점 정보 저장을 위한 id',
    `LOCATION_ID` INT NOT NULL COMMENT 'X 좌표',
    `TAG_NAME` VARCHAR(50) NOT NULL COMMENT 'Y좌표',
    PRIMARY KEY (`id`)
);
