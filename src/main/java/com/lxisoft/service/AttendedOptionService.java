package com.lxisoft.service;

import java.util.List;
import java.util.Optional;

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

		AttendedOption attendedOpt=new AttendedOption();
		log.debug("optionid"+optionid);
		if(optionid.equals("0"))
		{
			attendedOpt.setAttendedOpt(null);
			attendedOpt.setAttendedAnswer(null);
		}
		else
		{
			QstnOption qstnOption=optService.findById(optionid);
			attendedOpt.setAttendedOpt(qstnOption.getOption());
			attendedOpt.setAttendedAnswer(qstnOption.isIsAnswer());
		}
		attendedOpt.setAttendedExam(attendedExam);
		attendedOpt.setQuestion(question);
		log.debug("an attended option save: "+attendedOpt);
		attendOptRepo.save(attendedOpt);

	}
	

	public List<AttendedOption> findAllByAttendedExam(AttendedExam attendedExam) {
		return attendOptRepo.findAllByAttendedExam(attendedExam);
	}

	public void attendOptionUpdate(String optionid, Question question, AttendedExam attendedExam) {
		List<AttendedOption> attendedOptions=findAllByAttendedExam(attendedExam);
		QstnOption qstnOption=optService.findById(optionid);
		
		
		for(AttendedOption a:attendedOptions)
		{
			if(optionid.equals("0"))
			{
				a.setAttendedOpt(null);
				a.setAttendedAnswer(null);
			}
			else {
				Question quest=qstnOption.getQuestion();
				if(a.getQuestion().equals(quest))
				a.setAttendedOpt(qstnOption.getOption());
				a.setAttendedAnswer(qstnOption.isIsAnswer());
				
			}
			attendOptRepo.save(a);
		}
		
	}


}
