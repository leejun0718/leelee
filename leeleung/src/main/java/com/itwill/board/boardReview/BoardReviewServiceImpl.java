package com.itwill.board.boardReview;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("boardReviewService")
public class BoardReviewServiceImpl implements BoardReviewService {
	
	@Autowired
	private BoardReviewDao boardReviewDao;
	
	public BoardReviewServiceImpl() {}
	
	public void setBoardReviewDao(BoardReviewDao boardReviewDao) {
		this.boardReviewDao = boardReviewDao;
	}

	@Override
	public List<BoardReview> selectByAll(int startPageNo, int endPageNo) throws Exception{
		return boardReviewDao.selectByAll(1, 10);
	}
	
	@Override
	public PageMakerOutput boardReviewCount(PageMakerInput pageMakerInput)throws Exception {
		int totalReviewListCount= boardReviewDao.boardReviewCount();
		//ListResultBean 클래스-->결과데이타 DTO,VO(Board ArrayList + Paging)
		
		PageMakerOutput pageMakerOutput = 
								PageMakerCalculator.serviceGetPageing(Integer.parseInt(pageMakerInput.getSelectPage()),
																	  pageMakerInput.getRowCountPerPage(),
																	  pageMakerInput.getPageCountPerPage(),
																	  totalReviewListCount);
		
		List<BoardReview> boardList = boardReviewDao.selectByAll(pageMakerOutput.getStartRowNum(),pageMakerOutput.getEndRowNum());							
		
		pageMakerOutput.setList(boardList);
		return pageMakerOutput;
	}
	
	@Override
	public BoardReview selectByOne(int reviewNo) throws Exception{
		return boardReviewDao.selectByOne(reviewNo);
	}

	@Override
	public int insertBoardReview(BoardReview boardReview) throws Exception{
		return boardReviewDao.insertBoardReview(boardReview);
	}

	@Override
	public int updateBoardReview(BoardReview boardReview) throws Exception{
		return boardReviewDao.updateBoardReview(boardReview);
	}

	@Override
	public int deleteBoardReview(int reviewNo) throws Exception{
		return boardReviewDao.deleteBoardReview(reviewNo);
	}
	
	@Override
	public void reviewViewCount(int reviewNo, HttpSession session) throws Exception{
		long update_time = 0;
        // 세션에 저장된 조회시간 검색
        // 최초로 조회할 경우 세션에 저장된 값이 없기 때문에 if문은 실행X
        if(session.getAttribute("update_time_"+reviewNo) != null){
                                // 세션에서 읽어오기
            update_time = (long)session.getAttribute("update_time_"+reviewNo);
        }
        // 시스템의 현재시간을 current_time에 저장
        long current_time = System.currentTimeMillis();
        // 일정시간이 경과 후 조회수 증가 처리 24*60*60*1000(24시간)
        // 시스템현재시간 - 열람시간 > 일정시간(조회수 증가가 가능하도록 지정한 시간)
        if(current_time - update_time > 5*1000){
        	boardReviewDao.reviewViewCount(reviewNo);            
            // 세션에 시간을 저장 : "update_time_"+bno는 다른변수와 중복되지 않게 명명한 것
            session.setAttribute("update_time_"+reviewNo, current_time);
        }	
	}

}