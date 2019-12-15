package com.itwill.guest;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.itwill.mapper.GuestMapper;

public class GuestDao {
	private SqlSessionFactory sqlSessionFactory;
	public final static String NAMESPACE=
			"com.itwill.mapper.GuestMapper.";
	
	public GuestDao() throws Exception {
		InputStream in=null;
		try {
			in=Resources.getResourceAsStream("mybatis-config.xml");
			this.sqlSessionFactory = 
					new SqlSessionFactoryBuilder()
					.build(in);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

	/*
	 * READ ALL
	 */
	/*public List<Guest> selectAll() throws Exception {
		List<Guest> guestList = new ArrayList<Guest>();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		guestList = sqlSession.selectList(NAMESPACE+"selectAll");
		sqlSession.close();
		return guestList;
	}
	*/
	
	//인터페이스로하는방법
	public List<Guest> selectAll() throws Exception {
		List<Guest> guestList = new ArrayList<Guest>();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		GuestMapper guestMapper = sqlSession.getMapper(GuestMapper.class);
		guestList=guestMapper.selectAll();
		sqlSession.close();
		return guestList;
	}
	
	
	
	
	/*
	 * CREATE
	 */
	/*public int insertGuest(Guest guest) throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession(false);
		int insertRowCount = sqlSession.insert(NAMESPACE+"insertGuest",guest);
		sqlSession.commit();
		sqlSession.close();
		return insertRowCount;
	}
	*/
	
	
	//인터페이스
	public int insertGuest(Guest guest) throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession(false);
		GuestMapper guestMapper = sqlSession.getMapper(GuestMapper.class);
		int guestList = guestMapper.insertGuest(guest);
		sqlSession.commit();
		sqlSession.close();
		return guestList;
	}
	
	

	/*
	 * READ ONE
	 */
	/*public Guest selectByNo(int no) throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		Guest guest =sqlSession.selectOne(NAMESPACE+"selectByNo",no);
		sqlSession.close();
		return guest;
	}
	*/
	
	
	public Guest selectByNo(int no) throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		GuestMapper guestMapper = sqlSession.getMapper(GuestMapper.class);
		Guest guest = guestMapper.selectByNo(no);
		sqlSession.close();
		return guest;
	}

	
	/*
	 * DELETE
	 */
	public int deleteGuest(Integer guest_no) throws Exception{
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		int deleteRowCount = sqlSession.delete(NAMESPACE+"deleteByNo",guest_no);
		sqlSession.close();
		return deleteRowCount;
	}
	/*
	 * UPDATE
	 */
	public int updateGuest(Guest updateGuest) throws Exception{
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		int updateRowCount = sqlSession.update(NAMESPACE+"updateGuest",updateGuest);
		sqlSession.close();
		
		return updateRowCount;
	}

}
