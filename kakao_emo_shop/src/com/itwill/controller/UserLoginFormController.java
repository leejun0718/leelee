package com.itwill.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itwill.summer.Controller;

public class UserLoginFormController implements Controller {

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		String forwardPath = "";
		
		try {
			
			
			
			forwardPath = "";
			
		} catch (Exception e) {
			forwardPath = "forward:/WEB-INF/view/kakaoerroepage.jsp";
			e.printStackTrace();
		}
		return forwardPath;
	}

}
