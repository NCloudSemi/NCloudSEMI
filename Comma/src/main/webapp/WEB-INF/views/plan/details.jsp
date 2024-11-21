<%--@elvariable id="planData" type="java.util.List"--%>
<%--
  Created by IntelliJ IDEA.
  User: planl
  Date: 2024-08-06
  Time: 오후 11:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- /WEB-INF/views/plan/details.jsp -->
<!DOCTYPE html>
<html>
<head>
    <title>Plan Details</title>
</head>
<body>
<h1>Plan Details</h1>
<p>ID: ${planData['id']}</p>
<h2>Item Data:</h2>
<c:forEach var="entry" items="${planData['item_data']}">
    <p>${entry.key}: ${entry.value}</p>
</c:forEach>
</body>
</html>
