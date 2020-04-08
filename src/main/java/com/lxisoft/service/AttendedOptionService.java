package com.lxisoft.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.AttendedOption;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.repository.AttendedOptionRepository;
import com.lxisoft.web.ExamController;

@Service
public class AttendedOptionService {
	@Autowired
	private OptionService optService;
	@Autowired
	private AttendedOptionRepository attendOptRepo;
	
	private final Logger log = LoggerFactory.getLogger(AttendedOptionService.class);

	public void attendOption(String optionid, Question question, AttendedExam attendedExam) {
		QstnOption qstnOption=optService.findById(optionid);
		AttendedOption attendedOpt=new AttendedOption();
		attendedOpt.setAttendedOpt(qstnOption.getOption());
		attendedOpt.setAttendedAnswer(qstnOption.isIsAnswer());
		attendedOpt.setAttendedExam(attendedExam);
		attendedOpt.setQuestion(question);
		log.debug("an attended option save: "+attendedOpt);
		attendOptRepo.save(attendedOpt);
	}
	
	 
}
