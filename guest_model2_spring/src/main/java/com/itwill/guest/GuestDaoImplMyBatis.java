package com.itwill.guest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.naming.InitialContext;
import javax.sql.DataSource;
/*
방명록에서 데이타베이스와의 작업을 전담하는 클래스
GUEST 테이블에 GUEST를 추가,삭제,검색,수정등의 작업을한다.
*/

import org.apache.ibatis.session.SqlSession;



public class GuestDaoImplMyBatis implements GuestDao {
	
	public static final String NAMESPACE ="com.itwill.mapper.GuestMapper.";
	private SqlSession sqlSession;
	
	public GuestDaoImplMyBatis() throws Exception {
		System.out.println("1.### GuestDaoImplMyBatis()생성");
	}
	
	
	
	public void setSqlSession(SqlSession sqlSession) {
		System.out.println("2.### GuestDaoImplMyBatis: setSqlSession("+sqlSession+")메쏘드실행");
		this.sqlSession = sqlSession;
	}



	@Override
	public List<Guest> selectAll() throws Exception {
		List<Guest> guestList = sqlSession.selectList(NAMESPACE+"selectAll");
		return guestList;
	}
	@Override
	public boolean insertGuest(Guest guest) throws Exception {
		boolean isSuccess = false;
		return isSuccess;
	}
	@Override
	public Guest selectByNo(int no) throws Exception {
		Guest guest = null;
		guest=sqlSession.selectOne(NAMESPACE+"selectByNo",no);
		return guest;
	}
	@Override
	public boolean deleteGuest(int no) throws Exception{
		boolean deleteOK=false;
		return deleteOK;
	}
	@Override
	public boolean updateGuest(Guest updateGuest) throws Exception{
		boolean updateOK=true;
		return updateOK;
	}
}
