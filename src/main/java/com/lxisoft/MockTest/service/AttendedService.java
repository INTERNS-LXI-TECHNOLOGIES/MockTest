package com.lxisoft.MockTest.service;

import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.AttendedExam;

@Service
public class AttendedService {

	public AttendedExam attend(int score,int total) {
		AttendedExam attendedExam=new AttendedExam();
		int percentage=score/total;
		attendedExam.setScore(score);
		attendedExam.setTotal(total);
		attendedExam.setPercentage(percentage);
		if(percentage>=45)
		{
			attendedExam.setResult(true);
		}
		else {
			attendedExam.setResult(false);
		}
		return attendedExam;
	}

}
