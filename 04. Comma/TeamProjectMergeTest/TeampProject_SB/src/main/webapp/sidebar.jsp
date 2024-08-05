<%--
  Created by IntelliJ IDEA.
  User: bitcamp
  Date: 24. 7. 12.
  Time: 오후 4:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/sidebar-template.css">

    <div class="sidebar">
        <img src="${pageContext.request.contextPath}/static/image/Sidebar-Header-Logo.svg" class="sidebar-logo" alt="Sidebar-Header-Logo">
        <div class="sidebar-buttons">
            <button type="button" class="linked-map"  onclick="location.href='/location/main.do'">Travel Information</button>
            <button type="button" class="linked-card" onclick="location.href='/post/main.do'">Card Board</button>
            <button type="button" class="linked-mypage" onclick="location.href='/mypage/main'">My Page</button>
            <button id="logout">Logout</button>
        </div>
        <div class="sidebar-footer">
            <p>Tel.&nbsp;&nbsp;000-0000-0000</p>
            <p>Fax.&nbsp;&nbsp;00-0000-0000</p>
            <p>E-mail.&nbsp;&nbsp;comma@comma.com</p>
            <p>Addr.&nbsp;&nbsp;Seoul, Korea</p>
            <p>Hosting by COMMA</p>
            <img src="${pageContext.request.contextPath}/static/image/Siderbar-Footer-Logo.svg" alt="Sidebar-Header-Logo">
        </div>
    </div>


