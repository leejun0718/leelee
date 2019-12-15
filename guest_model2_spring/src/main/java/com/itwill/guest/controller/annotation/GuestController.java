package com.itwill.guest.controller.annotation;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.itwill.guest.Guest;
import com.itwill.guest.GuestService;
import com.itwill.guest.GuestServiceImpl;

@Controller
public class GuestController {
	
	@Autowired
	private GuestService guestService;
	
	@RequestMapping("/guest_main.do")
	public String guest_main() {
		return "/WEB-INF/view/guest_main.jsp";
	}
	
	@RequestMapping("/guest_list.do")
	public String guest_list(Model model) {
		String forwardPath="";
		try {
			List<Guest> guestList=guestService.selectAll();
			model.addAttribute("guestList", guestList);
			//request.setAttribute("guestList",guestList);
			forwardPath="forward:/WEB-INF/view/guest_list.jsp";
		}catch (Exception e) {
			forwardPath="forward:/WEB-INF/view/guest_error.jsp";
			e.printStackTrace();
			e.printStackTrace();
		}
		return "/WEB-INF/view/guest_list.jsp";
	}
	@RequestMapping("/guest_view.do")
	public String guest_view(@RequestParam(value="guest_no",defaultValue="1") String guest_noStr,Map map) {
			String forwardPath="";

		
			try {
				
				Guest guest = guestService.selectByNo(Integer.parseInt(guest_noStr));
				if(guest==null){
					forwardPath="redirect:guest_list.do";
				}else {
					//request.setAttribute("guest", guest);
					map.put("guest",guest);
					forwardPath="forward:/WEB-INF/view/guest_view.jsp";
				}
			}catch (Exception e) {
				e.printStackTrace();
				forwardPath="forward:/WEB-INF/view/guest_error.jsp";
			}
			return forwardPath;
		}
	
	@RequestMapping(value="/guest_delete_action.do",method=RequestMethod.POST)
	public String guest_delete(@RequestParam(value="guest_no")String guest_noStr) {
		String forwardPath="";
		System.out.println("아아앙 내번호는: "+guest_noStr);
			try {
				
				boolean deleteOK=
				guestService.deleteGuest(Integer.parseInt(guest_noStr));
				if(deleteOK){
					forwardPath="redirect:guest_list.do";
				}else{
					forwardPath="forward:/WEB-INF/view/guest_error.do";
				}
			}catch (Exception e) {
				e.printStackTrace();
				forwardPath="forward:/WEB-INF/view/guest_error.jsp";
			}
		return forwardPath;
		
	}
	
	@RequestMapping(value="/guest_delete_action.do",method=RequestMethod.GET)
	public String guest_deleteGet(@RequestParam("guest_no")String guest_noStr) {
		String forwardPath="";
		forwardPath="redirect:guest_main.do";
		return forwardPath;
	}

	
	@RequestMapping("/guest_write_form.do")
	public String guest_write_form() {
		String forwardPath="";
		forwardPath="/WEB-INF/view/guest_write_form.jsp";
		return forwardPath;
	}
	
	@RequestMapping("/guest_write_action.do")
	public String guest_write_action_form(@ModelAttribute Guest guest) {
		String forwardPath="";
	try {
		boolean insertOK = guestService.insertGuest(guest);
				if(insertOK){
					forwardPath="redirect:guest_list.do";
				}else{
					forwardPath="forward:/WEB-INF/view/guest_error.jsp";
				}
			
		}catch (Exception e) {
			e.printStackTrace();
			forwardPath="forward:/WEB-INF/view/guest_error.jsp";
		}
		return forwardPath;
	}
	@RequestMapping("/guest_modify_form.do")
	public String guest_modify_form(@RequestParam("guest_no")String guest_noStr,Model model) {
		String forwardPath="";
			try {
			
				Guest guest=guestService.selectByNo(Integer.parseInt(guest_noStr));
				model.addAttribute("guest",guest);
				forwardPath="forward:/WEB-INF/view/guest_modify_form.jsp";
			}catch (Exception e) {
				e.printStackTrace();
				forwardPath="forward:guest_error.jsp";
			}
		return forwardPath;
	}
	
	@RequestMapping("/guest_modify_action.do")
	public String guest_modify_action(@ModelAttribute Guest guest) {
		String forwardPath="";
			try {	
				boolean updateOK = guestService.updateGuest(guest);
				if(updateOK){
					forwardPath="redirect:guest_view.do?guest_no="+guest.guest_no;
					//forwardPath="forward:guest_view.do";
				}else{
					forwardPath="redirect:guest_error.do";
				}
			}catch (Exception e) {
				e.printStackTrace();
				forwardPath="forward:/WEB-INF/view/guest_error.jsp";
			}
		
		return forwardPath;
	}
	
	
}
	

