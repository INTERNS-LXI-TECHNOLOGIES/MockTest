package com.lxisoft.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.model.AttendedExamBean;
import com.lxisoft.model.AttendedExamModel;
import com.lxisoft.repository.UserExtraRepository;
import com.lxisoft.repository.UserRepository;

/**
 * Service class for managing Action in MocktestRestController.
 */
@Service
public class RestApiService {
	private final Logger log = LoggerFactory.getLogger(UserService.class);
	
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private UserExtraRepository extraRepo;
	public UserExtra currentUserExtra(String login)
	{
//		String login= SecurityContextHolder.getContext().getAuthentication().getName();
		Optional<User> optUser=userRepo.findOneByLogin(login);
		User currentUser=optUser.get();
		log.debug("user currently logged is :"+currentUser);
		Optional<UserExtra> optExtra=extraRepo.findById( currentUser.getId());
		UserExtra userExtra=optExtra.get();
		return userExtra;
	}
	public List<AttendedExamModel> attendedExamDetailsOfUser(List<AttendedExam> attendExamList) {
		
		DateTimeFormatter datePattern = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		DateTimeFormatter timePattern = DateTimeFormatter.ofPattern("hh:mm:ss a");
		List<AttendedExamModel> examlist=new ArrayList<AttendedExamModel>();
		for(AttendedExam atndexam:attendExamList)
		{
			
			AttendedExamModel model=new AttendedExamModel();
			model.setExamId(atndexam.getId());
			model.setDate(atndexam.getDateTime().toLocalDate().format(datePattern));
			model.setTime(atndexam.getDateTime().toLocalTime().format(timePattern));
			model.setExamName(atndexam.getExam().getName());
			model.setScore(atndexam.getScore());
			model.setTotal(atndexam.getTotal());
			model.setPercentage(atndexam.getPercentage());
			if(atndexam.isResult()==true)
			{
				model.setResult("Passed");
			}
			examlist.add(model);
		}
		return examlist;
	}
	
	

}
