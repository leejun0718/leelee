package com.itwill.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itwill.emo.Emo;
import com.itwill.emo.EmoService;
import com.itwill.summer.Controller;

public class EmoMainController implements Controller {

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		String forwardPath = "";
		
		try {
			EmoService emoService = new EmoService();
			// 인기 이모티콘 10개뽑기
			List<Emo> emoBestList = emoService.getEmoListByView(10);
			request.setAttribute("emoBestList", emoBestList);
			
			
			// 이모티콘 스타일별로 5개씩 뽑기
			ArrayList<String> styleNameList = emoService.getEmoStyleNameList();
			int styleCount = emoService.getEmoStyleCount();
			for (int i = 0; i < styleCount; i++) {
				String styleName = emoService.getStyleNameByNo(i);
				List<Emo> emoList = emoService.getEmoListByStyleNo(i, 5); //i번째 스타일의 이모티콘 5개 받기
				
				request.setAttribute(styleName, emoList);// 스타일 이름을 키로 해당 스타일 이모티콘리스트 저장
			}
			
			request.setAttribute("styleNameList", styleNameList);
			
			
			forwardPath = "forward:/WEB-INF/view/emo_Main.jsp";
			
		} catch (Exception e) {
			forwardPath = "forward:/WEB-INF/view/kakaoerroepage.jsp";
			e.printStackTrace();
		}
		return forwardPath;
	}
	
	
	
}
