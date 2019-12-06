<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%
	String sUserId=(String)session.getAttribute("sUserId");
	boolean isLogin=false;
	if(sUserId!=null){
		isLogin=true;
	}
%>

<p>
	<strong><s:message code="menu"/> </strong>
</p>
<ul>
		<%if(isLogin){ %>
			<li><a href="user_view?userId=<%=sUserId%>"><%=sUserId%>님</a>&nbsp;
			<a href="user_logout_action"><s:message code="button.logout"/> </a></li>
			<li><a href='user_list'><s:message code="button.list"/></a></li>
		<%}else{ %>
			<li><a href="user_write_form"><s:message code="button.write"/></a></li>
			<li><a href="user_login_form"><s:message code="button.login"/></a></li>
		<%} %>

</ul>

