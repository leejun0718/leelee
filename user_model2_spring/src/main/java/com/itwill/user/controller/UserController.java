package com.itwill.user.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.itwill.user.User;
import com.itwill.user.UserService;
import com.itwill.user.UserServiceImpl;
import com.itwill.user.exception.ExistedUserException;
import com.itwill.user.exception.PasswordMismatchException;
import com.itwill.user.exception.UserNotFoundException;

@Controller
public class UserController{
	@Autowired
	private UserService userService;
	
	@RequestMapping("/user_main")
	public String user_main() {
		return "user_main";
	}
	@RequestMapping("/user_login_form")
	public String user_login() {
		return "user_login_form";
	}
	
	
	@RequestMapping(value="/user_login_action",method=RequestMethod.POST)
	public String user_login_action(@RequestParam("userId")String userId,@RequestParam("password") String password,HttpSession session,Map map){
		String forwardPath="";
		User loginUser= null;
		try{
			
			loginUser = userService.login(userId,password);
		
			session.setAttribute("sUserId", userId);
			session.setAttribute("sUser", loginUser);
			//response.sendRedirect("user_main.jsp");
			forwardPath="redirect:user_main.do";
		}catch(UserNotFoundException e){
			
			map.put("msg1",e.getMessage());
			map.put("fuser",loginUser);
			forwardPath="user_login_form";
		}catch(PasswordMismatchException e){
	
			map.put("msg2",e.getMessage());
			map.put("fuser",loginUser);
			forwardPath="user_login_form";
		}catch(Exception e){
			e.printStackTrace();
			forwardPath="user_error";
		}
		return forwardPath;
	}
	
	
	@RequestMapping("/user_logout_action")
	public String user_logout_action(HttpSession session) {
		session.invalidate();

		return "redirect:user_main";
		
	}
	
	@RequestMapping("/user_write_form")
	public String user_write_form() {
		return "user_write_form";
		
	}
	
	@RequestMapping(value="/user_write_action",method=RequestMethod.POST)
	public String user_write_action(User user,Map map) {
		String forwardPath="";
		User newUser=null;
		try{
			userService.create(user);
			forwardPath="redirect:user_login_form";
		}catch(ExistedUserException e){
			
			map.put("fuser",newUser);
			map.put("msg", e.getMessage());
			forwardPath="user_write_form";
		}catch(Exception e){
			e.printStackTrace();
			forwardPath="user_error";
		}
		return forwardPath;
		
	}
	
	@RequestMapping("/user_list")
	public String user_list(Map map) {
		String forwardPath = "";
		try {
			
			List<User> userList = userService.findUserList();
			map.put("userList", userList);
			forwardPath="user_list";
		} catch (Exception e) {
			e.printStackTrace();
			forwardPath="user_error";
		}
		return forwardPath;
		
	}
	
	
	@RequestMapping("/user_view")
	public String user_view(@RequestParam("userId") String userId,Map map) {
		String forwardPath = "";
		
		if (userId == null || userId.equals("")) {
			forwardPath = "redirect:user_list";
		} else {
			User user = null;
			try {
			
				user = userService.findUser(userId);
				map.put("user", user);
				forwardPath = "user_view";
			} catch (UserNotFoundException e) {
				map.put("USER_NOT_FOUND_MSG", e.getMessage());
				forwardPath = "user_list";
			} catch (Exception e) {
				e.printStackTrace();
				forwardPath = "user_error";
			}
		}
		return forwardPath;
		
	}
	
	
	

}
