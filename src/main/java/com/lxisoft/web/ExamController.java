package com.lxisoft.web;


import java.time.Instant;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.Exam;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.repository.UserRepository;
import com.lxisoft.service.AttendedExamService;
import com.lxisoft.service.ExamService;
import com.lxisoft.service.OptionService;
import com.lxisoft.service.QuestionService;
import com.lxisoft.service.UserExtraService;
import com.lxisoft.service.UserService;
import com.lxisoft.service.dto.UserDTO;

/**
 * Mocktest Exam controller
 */
@Controller
public class ExamController 
{
	private final Logger log = LoggerFactory.getLogger(ExamController.class);
    
    
	@Autowired
	private AttendedExamService attendExamService;
	@Autowired
	private OptionService optService;
	@Autowired
	private ExamService examService;
	@Autowired
	private UserService userService;
	@Autowired
	private QuestionService questService;
	@Autowired
	private	UserExtraService extraService;
	
	@RequestMapping(value="/")
	public String index()
	{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		boolean isAdmin=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
		boolean isUser=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_USER"));
		if(isAdmin)
			return "adminpage";
		else if(isUser)
			return "redirect:/user_dashboard";
		else 
			return "redirect:/login";
	
	}
	@RequestMapping("/login")
	public String indexpage()
	{
		
		return "index";
	}

	@RequestMapping("/register")
	public String register(Model model)
	{
		model.addAttribute("user", new User());
		return "registration";
	}

	
	@RequestMapping("/setTime")
	public String setTime()
	{

		return "userpage";
	}
	
	@RequestMapping(value="/save")  
	public String save(@Valid User user,BindingResult bindingResult)
	{  
		if (!bindingResult.hasErrors()) {
			extraService.save(user);  
			return  "redirect:/";}
			else
				return "registration";


	}  



//	@RequestMapping ("/loginpage")
//	public String login()
//	{
//		return "login";
//	}

	@RequestMapping ("/logoutpage")
	public String logout()
	{
		return "logoutpage";
	}
	
	@RequestMapping ("/user_startpage")
	public String userpage(Model model) throws Exception
	{
		Set<Exam> active_exams=examService.findActiveExams();
		model.addAttribute("exam_list",active_exams);
		return "user_startpage";
	}
	@RequestMapping ("/user_dashboard")
	public String userdashboard(Model model)
	{
		model.addAttribute("username",SecurityContextHolder.getContext().getAuthentication().getName());
		UserExtra userExtra=extraService.currentUserExtra();
		
		Set<AttendedExam> attended_examList=userExtra.getAttendedExams();
		model.addAttribute("AttendedExamList",attended_examList);
		return "user_dashboard";
	}
	
	@RequestMapping(value="/user_instruction")
	public String userinstruction(Model model,@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		model.addAttribute("exam",exam);
		return"user_instruction";
	}

	@RequestMapping(value="/user_exam")
	public String userview(Model model,@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		Set<Question> questions=exam.getQuestions();
		List<Question> list = new ArrayList<Question>();
		for(Question quest:questions) 
		{
			list.add(quest);
		}
		 ListIterator<Question> lit = list.listIterator(); 
		 int count=0;
		 AttendedExam attendedExam=new AttendedExam();
		  ZonedDateTime dateTime = ZonedDateTime.now();
		  attendedExam.setDateTime(dateTime);
		  attendExamService.save(attendedExam);
		  model.addAttribute("aExamId",attendedExam.getId());
		  log.debug("attended exam is :" + attendedExam);
		 if (lit.hasNext()) { 
			  model.addAttribute("question",lit.next());
			  model.addAttribute("exam",exam);
			  model.addAttribute("iterator",lit);
			  model.addAttribute("count",count);
			  ////// exam attend time here...
			  return "user_exampage";
		 }
		return "redirect:/submit";
	}
	
	@RequestMapping(value="/user_nextPage")
	public String userNextPage(Model model,@RequestParam String aExamId,@RequestParam String eId,@RequestParam String index,@RequestParam(name="optionid",required=false,defaultValue="0") String optionid,@RequestParam String count) throws Exception
	{
		Exam exam = examService.findById(eId);
		Set<Question> questions = exam.getQuestions();
		List<Question> list = new ArrayList<Question>();
		int pos = Integer.parseInt(index);
		for (Question quest : questions) {
			list.add(quest);
		}
		ListIterator<Question> lit = list.listIterator(pos);
		int marks = Integer.parseInt(count);
		marks = optService.setResult(marks, optionid);
		model.addAttribute("count", marks);
		model.addAttribute("aExamId",aExamId);
		////////     attendOptSer.attendOption(optionid,lit.previous());
		if (lit.hasNext()) {
			model.addAttribute("question", lit.next());
			model.addAttribute("exam", exam);
			model.addAttribute("iterator", lit);
//			model.addAttribute("attendedExam", attendedExam);
			return "user_exampage";
		}
//		model.addAttribute("attendedExam", attendedExam);
		return "redirect:/submit?count=" + marks + "&eId=" + eId +"&aExamId=" +aExamId;
	}
		
	@RequestMapping("/submit")
	public String submit(@RequestParam String aExamId,@RequestParam String count,@RequestParam String eId,Model model) throws Exception
	{
		AttendedExam attendedExam=attendExamService.findById(aExamId);
		int score = Integer.parseInt(count);
		Exam exam = examService.findById(eId);
		int total = exam.getCount();
		UserExtra userExtra = extraService.currentUserExtra();
		attendedExam.setUserExtra(userExtra);
		log.debug("attended exam's user id is :" + attendedExam.getUserExtra());
		log.debug("time attended is " + attendedExam.getDateTime());
		attendedExam.setExam(exam);
		attendedExam = attendExamService.attend(attendedExam, score, total);
		attendExamService.save(attendedExam);
		model.addAttribute("attendedExam", attendedExam);
		model.addAttribute("username", SecurityContextHolder.getContext().getAuthentication().getName());
		return "submit";
	}


	@RequestMapping("/create_question")
	public String question(Model model)
	{
		model.addAttribute("question",new Question());
		return "create_question";
	}


	@RequestMapping(value="/add_question")
	public String createExam(@Valid Question question ,BindingResult bindingResult,@RequestParam String opt1,@RequestParam String opt2,@RequestParam String opt3)
	{ 
		questService.save(question);
		if (!bindingResult.hasErrors()) {
		 optService.saveQstnOptn(question,opt1,opt2,opt3);
	      return "redirect:/";}
	    else return "create_question";

	}
	@RequestMapping(value="/addmore_question")
	public String addmore( @Valid Question quest,Model model,BindingResult binding,@RequestParam String opt1,@RequestParam String opt2,@RequestParam String opt3) 
	{
		questService.save(quest);
		if(!binding.hasErrors()) {
			 optService.saveQstnOptn(quest,opt1,opt2,opt3);
			model.addAttribute("question",new Question());
		}
		return "create_question";

	}
	@RequestMapping ("/create_exam")
	public String create_exam(Model model)
	{
		model.addAttribute("exam",new Exam());	 
		return "create_exam";
	}

	@RequestMapping ("/save_exam")
	public String save_exam(Exam exam,@RequestParam String time) throws Exception
	{
		exam.setIsActive(false);
		exam.setTime(time);
		examService.save_exam(exam);
		return "redirect:/";
	}

	
	@RequestMapping ("/current_exams")
	public String current_exams(Model model)
	{
		model.addAttribute("exams",examService.findAll());
		return "current_exams";
	}
	
	@RequestMapping ("/selectExam")
	public String selectExam(Model model,@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		model.addAttribute("questions",exam.getQuestions());
		model.addAttribute("exam",exam);
		return "activateExam";
	}
	
	@RequestMapping ("/activate_exam")
	public String activate_exam(@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		if(exam.isIsActive()==true)
		{
			exam.setIsActive(false);
		}
		else {
			exam.setIsActive(true);
		}
		examService.update(exam);
		return "redirect:/selectExam?eId="+eId;
	}
	
	@RequestMapping ("/set_Answer")
	public String setAnswer(@RequestParam String opt_Id,@RequestParam String qstn_id)
	{
		Question question=questService.findById(qstn_id);
		QstnOption qstn_optn=optService.findById(opt_Id);
		if(qstn_optn.isIsAnswer()==false)
			qstn_optn.setIsAnswer(true);
		else 
			qstn_optn.setIsAnswer(false);
		questService.save(question);
		optService.save(qstn_optn);
		return "redirect:/viewall_qstn";
	}

	@RequestMapping ("/viewall_qstn")
	public String viewall_qstn(Model model) 
	{
		List<Question> questions=questService.findAll();
		model.addAttribute("questions",questions);	
		return "viewall_qstn";

	}

		@RequestMapping("/filter")
		public String questionFilter(Model model,@RequestParam String level)
		{
			if(!level.equalsIgnoreCase("--select--"))
			{
				 log.info("question list");
				List<Question> questions=questService.findByLevel(level);
				model.addAttribute("questions",questions);	
				 log.debug("{}", questions);
				 return "viewall_qstn";
			}
			return "redirect:/viewall_qstn";
			
		}
		
		@RequestMapping("/searchQstn")
		public String searchQuestion(Model model,@RequestParam String searchQstn)
		{
//			List<Question> questions=questService.findAll();
			List<Question> questions=questService.findByQstn(searchQstn);
			model.addAttribute("questions",questions);	
			return "viewall_qstn";
		}
		
//		@RequestMapping("/deleteQuestion")
//		public String deleteQuestion(Model model,@RequestParam String qId)
//		{
//			
//			questService.deleteQuestion(qId);
//		List<Question> questions=questService.findAll();
//		model.addAttribute("questions",questions);	
//		return "viewall_qstn";
//		
//		}
		
		@RequestMapping("/user_info")
		public String user_info(Model model)
		{
			model.addAttribute("users",extraService.findAll());
			return "user_info";
		}
		@RequestMapping("/user_details")
		public String userDetails(Model model,@RequestParam String id) throws Exception
		{
			
		/* model.addAttribute("users",extraService.findAll()); */
			UserExtra user=extraService.findById(id);
			model.addAttribute("user",user);
			Set<AttendedExam> attended_examList=user.getAttendedExams();
			model.addAttribute("AttendedExamList",attended_examList);
			return "user_details";
		}
		
		@RequestMapping("/exam_info")
		public String exam_info(Model model)
		{
			model.addAttribute("exams",examService.findAll());
			return "exam_info";
		}

		
		@RequestMapping("/exam_attended")
		public String exam_attended(@RequestParam String eId, Model model) throws Exception
		{
			Exam exam=examService.findById(eId);
			model.addAttribute("users",extraService.findAll());
			model.addAttribute("exam",exam);
			model.addAttribute("attendList",attendExamService.findAllByExam(exam));
			return "exam_attended";
		}


}
