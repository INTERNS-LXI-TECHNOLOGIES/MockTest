package com.lxisoft.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.repository.AttendedExamRepository;

@Service
@Transactional
public class AttendedExamService {

    private final Logger log = LoggerFactory.getLogger(AttendedExamService.class);
    @Autowired
    AttendedExamRepository attendedRepo;
    
    public AttendedExam attend(AttendedExam attendedExam,int score,int total) {
		float percentage=(score*100)/total;
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
		log.debug("exam attended- "+attendedExam);
		return attendedExam;
	}


	public void save(AttendedExam attendedExam) {
		// TODO Auto-generated method stub
		attendedRepo.save(attendedExam);
		log.debug("exam attended saved in database- "+attendedExam);
	}

}
