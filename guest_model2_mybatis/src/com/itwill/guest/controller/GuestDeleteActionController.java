package com.itwill.guest.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itwill.guest.GuestService;
import com.itwill.summer.Controller;

public class GuestDeleteActionController implements Controller {

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		String forwardPath="";
		if(request.getMethod().equalsIgnoreCase("GET")){
			forwardPath="redirect:guest_main.do";
		}else {
			try {
				String guest_no=request.getParameter("guest_no");
				GuestService guestService=new GuestService();
				int deleteOK=
				guestService.deleteGuest(Integer.parseInt(guest_no));
				if(deleteOK !=0){
					forwardPath="redirect:guest_list.do";
				}else{
					forwardPath="forward:/WEB-INF/view/guest_error.do";
				}
			}catch (Exception e) {
				e.printStackTrace();
				forwardPath="forward:/WEB-INF/view/guest_error.jsp";
			}
		}
		return forwardPath;
	}

}
