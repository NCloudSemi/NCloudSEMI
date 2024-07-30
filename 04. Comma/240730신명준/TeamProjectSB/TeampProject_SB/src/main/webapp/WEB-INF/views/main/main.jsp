
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <title></title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/header.css">
</head>

<header>
    <img src="${pageContext.request.contextPath}/static/img/Header-Logo.svg" alt="로고">
</header>
<div class="container">
    <div class="content">
        <ul class="category-box">
            <li>
                <img src="${pageContext.request.contextPath}/static/img/Lodgment.svg" alt="이미지">
                <div class="overlay">
                    <div class="description">
                        <div class="discription-t">Lodgment</div>
                        <div class="description-c">숙소에 대한 정보를 바로 확인해보세요.</div>
                    </div>
                </div>
            </li>
            <li>
                <img src="${pageContext.request.contextPath}/static/img/Food.svg" alt="이미지">
                <div class="overlay">
                    <div class="description">
                        <div class="discription-t">Food</div>
                        <div class="description-c">식당에 대한 정보를 바로 확인해보세요.</div>
                    </div>
                </div>
            </li>
            <li>
                <img src="${pageContext.request.contextPath}/static/img/Tourism.svg" alt="이미지">
                <div class="overlay">
                    <div class="description">
                        <div class="discription-t">Tourism</div>
                        <div class="description-c">여행지에 대한 정보를 바로 확인해보세요.</div>
                    </div>
                </div>
            </li>
            <li>
                <img src="${pageContext.request.contextPath}/static/img/Activity.svg" alt="이미지">
                <div class="overlay">
                    <div class="description">
                        <div class="discription-t">Activity</div>
                        <div class="description-c">액티비티에 대한 정보를 바로 확인해보세요.</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<!--링크용-->
<script>
    $(()=>{
        $('.category-box li').on('click',()=> {
            $("body").empty()
            $.ajax({
                url:'/sidebar.jsp',
                success: (page)=>{
                    $("body").html(page)
                    $.ajax({
                        url: "/location/main.do",
                        type: "get",
                        contentType: "application/x-www-form-urlencoded",
                        success: (page) => {

                            $(".content").html(page);
                        },
                        error: (err) => {
                            console.log("ERROR", err);
                        }
                    });
                }
            })
        })
    })
</script>
