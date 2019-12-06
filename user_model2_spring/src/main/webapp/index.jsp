<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<h1>index.jsp</h1><hr/>

<html>
	<head>
		<meta charset="utf-8">
		<title>Welcome2</title>
	</head> 
	<body>
		<c:url value="/user_main" var="messageUrl" />
		<a href="${messageUrl}">Click to enter</a>
	</body>
</html>
