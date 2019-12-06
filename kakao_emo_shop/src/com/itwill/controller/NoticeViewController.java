package com.itwill.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itwill.notice.Notice;
import com.itwill.notice.NoticeService;
import com.itwill.summer.Controller;

public class NoticeViewController implements Controller {

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		String forwardPath = "";
		String board_noStr = request.getParameter("board_no");
		if (board_noStr == null || board_noStr.equals("")) {
			forwardPath = "redirect:board_list.do";
		} else {
			try {
				NoticeService noticeService = new NoticeService();
				Notice notice = noticeService.getNotice(Integer.parseInt(board_noStr));
				if (notice == null) {
					forwardPath="forward:/WEB-INF/testview/kakaoerroepage.jsp";
				} else {
					request.setAttribute("notice",notice);
					forwardPath="forward:/WEB-INF/view/board_view.jsp";
				}
			} catch (Exception e) {
				forwardPath = "forward:/WEB-INF/testview/kakaoerroepage.jsp";
				e.printStackTrace();
			}
		}
		return forwardPath;
	}

}
