<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="language" value="${pageContext.request.locale.language }" />
<c:set var="country" value="${pageContext.request.locale.country }" />
<fmt:setLocale value="${language }"/>
<<fmt:setBundle basename="com/itwill/guest/guest" />
<fmt:message key="title.menu" var="menu"/></li>
<fmt:message key="title.main" var="main"/></li>
<fmt:message key="title.write" var="write"/></li>

<p>
	<strong>${menu }</strong>
</p>
<ul>
	<li><a href="guest_list.do">${main }</a></li>
	<li><a href="guest_write_form.do">${write }</a></li>

</ul>
