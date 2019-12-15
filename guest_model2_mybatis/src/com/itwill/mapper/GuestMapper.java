package com.itwill.mapper;

import java.util.List;

import com.itwill.guest.Guest;

public interface GuestMapper {
	
	public Guest selectByNo(int guest_no);
	
	public List<Guest> selectAll();
	
	public int insertGuest(Guest guest);
}
