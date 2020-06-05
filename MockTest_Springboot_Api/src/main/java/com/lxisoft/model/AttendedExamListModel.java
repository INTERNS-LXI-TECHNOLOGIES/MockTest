package com.lxisoft.model;
/**
 *  AttendedExamListModel  for transferring the data to Front end
 */

import java.util.List;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.Exam;
import com.lxisoft.domain.User;

public class AttendedExamListModel {
	
	List<User> users;
	Exam exam ;
	List<AttendedExam> attendList;
	
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public Exam getExam() {
		return exam;
	}
	public void setExam(Exam exam) {
		this.exam = exam;
	}
	public List<AttendedExam> getAttendList() {
		return attendList;
	}
	public void setAttendList(List<AttendedExam> attendList) {
		this.attendList = attendList;
	}
	

}
