package com.lxisoft.model;

import java.util.List;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.UserExtra;

/**
 * userDashboard model  for transferring the data to Front end
 */

public class UserDashBoard {
	
	private UserExtra currentUser;
	private long userId;
	private List<AttendedExamModel> attendedExamList;
	

	
	
	public UserExtra getCurrentUser() {
		return currentUser;
	}


	public void setCurrentUser(UserExtra currentUser) {
		this.currentUser = currentUser;
	}


	


	public long getUserId() {
		return userId;
	}


	public void setUserId(long userId) {
		this.userId = userId;
	}


	public List<AttendedExamModel> getAttendedExamList() {
		return attendedExamList;
	}


	public void setAttendedExamList(List<AttendedExamModel> examlist) {
		this.attendedExamList = examlist;
	}


	public UserDashBoard(UserExtra currentUser, long userId, List<AttendedExamModel> attendedExamList) {
		super();
		this.currentUser = currentUser;
		this.userId = userId;
		this.attendedExamList = attendedExamList;
	}

	public UserDashBoard() {
		super();
		
	}
	
	
}
