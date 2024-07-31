<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>반응형 레이아웃</title>
    <!-- js link -->
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.7.1.min.js"></script>
    <!-- bootstrap5 link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- style css link -->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/sidebar-template.css">
</head>
<body>
    <div class="wrap">
        <div class="sidebar">
            <img src="${pageContext.request.contextPath}/static/image/Sidebar-Header-Logo.svg" class="sidebar-logo" alt="Sidebar-Header-Logo">
            <div class="sidebar-buttons">
                <button>Travel Information</button>
                <button>Card Board</button>
                <button>My Page</button>
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
    </div>
</body>
</html>