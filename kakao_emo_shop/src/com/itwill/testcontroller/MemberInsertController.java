package com.itwill.testcontroller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.itwill.summer.Controller;

public class MemberInsertController implements Controller{

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		String forwardPath = "forward:/WEB-INF/view/join.jsp";
//		String forwardPath = "";
		
		
		
		
		return forwardPath;
	}
	
	
}
