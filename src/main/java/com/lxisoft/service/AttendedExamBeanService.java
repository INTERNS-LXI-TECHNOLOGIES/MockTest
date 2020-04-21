package com.lxisoft.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.AttendedOption;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;

import com.lxisoft.domain.UserExtra;
import com.lxisoft.model.AttendedExamBean;

@Service
@Transactional
public class AttendedExamBeanService {

    private final Logger log = LoggerFactory.getLogger(AttendedExamBeanService.class);
    @Autowired
	private	UserExtraService extraService;
    @Autowired
	private AttendedExamService attendExamService;

	public List<AttendedExamBean> getAttendedExamDataBean(String attendExam_id) {
		
		List<AttendedExamBean> list=new ArrayList<AttendedExamBean>();
		
		UserExtra userExtra=extraService.currentUserExtra();
		AttendedExam attendedExam=attendExamService.findById(attendExam_id);
		AttendedExamBean bean=new AttendedExamBean();
		
		bean.setExamName(attendedExam.getExam().getName());
		bean.setScore(attendedExam.getScore());
		bean.setTotal(attendedExam.getTotal());
		bean.setPercentage(attendedExam.getPercentage());
		
		if(attendedExam.isResult()==true)
		{
			bean.setResult("Passed");
		}
		
		
		Set<Question> questionlist=attendedExam.getExam().getQuestions();
		ArrayList<String>questions=new ArrayList<String>();
		ArrayList<String>options=new ArrayList<String>();
		for(Question quest:questionlist)
		{
			questions.add(quest.getQstn());
			Set<QstnOption> optionlist=quest.getQstnOptions();
			for(QstnOption opt:optionlist)
			{
				options.add(opt.getOption());
			}
			
		}
		bean.setQuestion(questions);
		bean.setOptions(options);
		
		ArrayList<String>attended_opt=new ArrayList<String>();
		Set<AttendedOption> attendedOptions=attendedExam.getAttendedOptions();
		for(AttendedOption atn_opt:attendedOptions)
		{
			attended_opt.add(atn_opt.getAttendedOpt());
			if(atn_opt.isAttendedAnswer()==true) {
				bean.setAttended_answer(true);
			}
		}
		
		bean.setAttended_opt(attended_opt);
		String user=userExtra.getUser().getFirstName()+" "+userExtra.getUser().getLastName();
		bean.setUser(user);
		
		list.add(bean);
		log.debug("beanlist"+list);
		return list;
	}
    
    

}
