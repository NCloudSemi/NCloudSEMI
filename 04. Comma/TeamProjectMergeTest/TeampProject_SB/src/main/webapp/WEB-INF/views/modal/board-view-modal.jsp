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

    <!--kakao-->
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba1ee8768e59dc81c31a27c0e72ea4a&libraries=services"></script>
    <!-- js link -->
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.7.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/board-view-modal.js-modal.js"></script>
    <!-- style css link -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/board-view-modal.css">

</head>
<body>
    <input type="hidden" id="contextPath" value="${pageContext.request.contextPath}">
    <div class="content">
        <div id="view-modal" class="board-modal" style="display: none">
            <div class="modal-box">
                <div class="modal-img">
                    <button class="slide-button prev">&#10094;</button>
                    <img src="${pageContext.request.contextPath}/static/image/Example_Img1.svg" alt="Example_Img1" class="slide-image">
                    <button class="slide-button next">&#10095;</button>
                </div>
                <div class="modal-content">
                    <div class="edit-delete-buttons">
                        <button class="edit">✍️</button>
                        <button class="delete">🗑️</button>
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
                        <textarea name="title" id="title" readonly>제목 test</textarea>
                        <textarea name="memo" id="memo" readonly>내용 test</textarea>
                    </div>
                    <div class="modal-text-line"></div>
                    <div class="modal-interaction">
                        <button class="modal-interaction-like-button">
                            <img src="${pageContext.request.contextPath}/static/image/Liked-Icon.svg" alt="좋아요">
                        </button>
                        <span class="modal-interaction-like-count">15,132</span>
                        <button class="share-button">
                            <img src="${pageContext.request.contextPath}/static/image/Share.svg" alt="공유">
                        </button>
                        <button class="plan-button" href="#">
                            <img src="${pageContext.request.contextPath}/static/image/Plan_Icon.svg" alt="">
                        </button>
                    </div>
                    <div class="modal-comment-box">
                        <div class="comment">
                            <img src="${pageContext.request.contextPath}/static/image/Comment1.svg" alt="Comment1" class="commenter-image">
                            <div class="comment-content">
                                <div class="commenter-info">
                                    <span class="commenter-name">inner_dev</span>
                                    <img src="${pageContext.request.contextPath}/static/image/Comment1-Rank.svg" alt="rank" class="commenter-rank">
                                </div>
                                <p class="comment-text">미친.. 대박😲🫢 인피니티 풀 장난 아니네요;;;</p>
                                <button class="reply-button">답글 달기</button>
                            </div>
                            <button class="like-button">
                                <img src="${pageContext.request.contextPath}/static/image/Unliked-Icon.svg" alt="좋아요">
                            </button>
                        </div>
                        <div class="comment">
                            <img src="${pageContext.request.contextPath}/static/image/Comment2.svg" alt="Comment2" class="commenter-image">
                            <div class="comment-content">
                                <div class="commenter-info">
                                    <span class="commenter-name">hsmt_y</span>
                                    <img src="${pageContext.request.contextPath}/static/image/Comment2-Rank.svg" alt="rank" class="commenter-rank">
                                </div>
                                <p class="comment-text"><span id="tag">@i_m_0._.</span> 나영쓰.. 여기다.. 가자! 나 다음 여행 때 저기 무조건 데리고 가줘.. 제바류ㅠㅠ🥹🥹🥹🥹🥹</p>
                                <button class="reply-button">답글 달기</button>
                            </div>
                            <button class="like-button">
                                <img src="${pageContext.request.contextPath}/static/image/Liked-Icon.svg" alt="좋아요">
                            </button>
                        </div>
                        <div class="comment">
                            <div class="commenter-image-wrapper">
                                <img src="${pageContext.request.contextPath}/static/image/Comment3.svg" alt="Comment3" class="commenter-image">
                            </div>
                            <div class="comment-content">
                                <div class="commenter-info">
                                    <span class="commenter-name">wmmwSiru</span>
                                    <img src="${pageContext.request.contextPath}/static/image/Comment3-Rank.svg" alt="rank" class="commenter-rank">
                                </div>
                                <p class="comment-text">헐... 여행가고 시ㅍ다</p>
                                <button class="show-more-comments">댓글 더보기</button>
                                <div class="hidden-comments" style="display: none;">
                                    <div class="hidden-comment">
                                        <img src="${pageContext.request.contextPath}/static/image/Hidden-Comment1.svg" class="hidden-commenter-image" alt="Hidden-Comment1">
                                        <div class="hidden-comment-content">
                                            <div class="hidden-commenter-info">
                                                <span class="hidden-commenter-name">life_hip_somi</span>
                                                <img src="${pageContext.request.contextPath}/static/image/Writer-Rank.svg" class="hidden-commenter-rank" alt="Hidden-Comment1-Rank">
                                            </div>
                                            <p class="hidden-comment-text"><span id="tag">@wmmwSiru</span>ㄹㅇ... 우리 그래서 언제 여행 가는건데;;</p>
                                        </div>
                                        <button class="hidden-like-button">
                                            <img src="${pageContext.request.contextPath}/static/image/Unliked-Icon.svg" alt="Like">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button class="like-button">
                                <img src="${pageContext.request.contextPath}/static/image/Liked-Icon.svg" alt="좋아요">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page="../modal/location-modal.jsp"></jsp:include>
</body>


