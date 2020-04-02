package com.lxisoft.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lxisoft.domain.AttendedExam;

@Service
@Transactional
public class AttendedExamService {

    private final Logger log = LoggerFactory.getLogger(AttendedExamService.class);
    public AttendedExam attend(int score,int total) {
		AttendedExam attendedExam=new AttendedExam();
		float percentage=(score*100)/total;
		System.out.println(percentage);
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
