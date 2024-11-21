<%--
  Created by IntelliJ IDEA.
  User: bitcamp
  Date: 24. 8. 5.
  Time: 오후 5:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <title>게시글 보기 모달창</title>


    <!-- js link -->
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.7.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/board-write-modal.js"></script>
    <!-- style css link -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/board-write-modal.css">

</head>
<body>
    <input type="hidden" id="contextPath" value="${pageContext.request.contextPath}">
    <div class="content">
        <div id="write-modal" class="board-modal" style="display: none">
            <div class="modal-box">
                <div class="modal-img">
                    <button class="slide-button prev2">&#10094;</button>
                    <img src="${pageContext.request.contextPath}/static/image/Default-Img.svg" alt="" class="slide-image2" id="main-slide-image">
                    <button class="slide-button next2">&#10095;</button>
                </div>
                <div class="modal-content">
                    <div class="modal-content">
                        <div class="edit-delete-buttons">
                            <button class="photo">
                                <img src="${pageContext.request.contextPath}/static/image/D_PicAdd.svg" alt="사진 추가"/>
                            </button>
                            <input type="file" id="fileInput" accept="image/*" multiple style="display: none;">
                            <button class="plan-button2">
                                <img src="${pageContext.request.contextPath}/static/image/Plan_Icon.svg" alt="">
                            </button>
                            <button class="save">
                                <img src="${pageContext.request.contextPath}/static/image/D_Save.svg" alt="저장" />
                            </button>
                            <button class="delete">
                                <img src="${pageContext.request.contextPath}/static/image/delete_icon.svg" alt="삭제" />
                            </button>
                        </div>
                        <div class="writer-profile-box">
                            <div class="writer-image-box">
                                <img src="${pageContext.request.contextPath}/static/image/Writer.svg" alt="글쓴이 프로필 사진" class="writer-image">
                            </div>
                            <div class="writer-info">
                                <div class="writer-name">Sovely._.153</div>
                                <div class="writer-location">Cheonan, South Korea</div>
                            </div>
                            <img src="${pageContext.request.contextPath}/static/image/Writer-Rank.svg" alt="글쓴이 여행 등급 사진" class="writer-rank-image">
                        </div>
                        <div class="modal-text">
                            <textarea name="title" id="title">제목 test</textarea>
                            <textarea name="memo" id="memo">내용 test</textarea>
                        </div>
                        <div class="modal-text-line"></div>
                        <div class="modal-preview-box" id="preview-box">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>


