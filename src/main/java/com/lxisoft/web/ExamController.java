package com.lxisoft.web;


import java.time.LocalTime;
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
import com.lxisoft.service.AttendedExamService;
import com.lxisoft.service.ExamService;
import com.lxisoft.service.OptionService;
import com.lxisoft.service.QuestionService;




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
//	@Autowired
//	private UserService service;
	@Autowired
	private QuestionService questService;

	@RequestMapping(value="/")
	public String index()
	{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		boolean isAdmin=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
		boolean isUser=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_USER"));
		if(isAdmin)
			return "adminpage";
		else if(isUser)
			return "redirect:/user_startpage";
		else 
			return "redirect:/login";
	
	}

	@RequestMapping("/register")
	public String register(Model model)
	{
		model.addAttribute("userRegistration", new User());
		return "registration";
	}

//	@RequestMapping("/timer")
//	public String setTimer(Model model, SetTimerModel timer1)
//	{
//		model.addAttribute("timer",timer1);
//		return "setTimer";
//	}
	
	@RequestMapping("/setTime")
	public String setTime()
	{

		return "userpage";
	}
	@RequestMapping("/submit")
	public String submit(@RequestParam String count,@RequestParam String eId,Model model) throws Exception
	{
		int score=Integer.parseInt(count);
		Exam exam=examService.findById(eId);
		int total=exam.getCount();
		AttendedExam attendedExam=attendExamService.attend(score,total);
		model.addAttribute("attendedExam",attendedExam);
		model.addAttribute("username",SecurityContextHolder.getContext().getAuthentication().getName());
		return "submit";
	}
	
	@RequestMapping(value="/save")  
	public String save(@Valid User user,BindingResult bindingResult,@RequestParam String cpw)
	{  
//		if (!bindingResult.hasErrors()) {
//			if(user.getPassword().equals(cpw))
//				service.saveService(user);  
//			else
//				return "registration";
//
//		}
		return ((bindingResult.hasErrors()) ? "registration" : "redirect:/");
	}  


	@RequestMapping ("/user_startpage")
	public String userpage(Model model) throws Exception
	{
		Set<Exam> active_exams=examService.findActiveExams();
		model.addAttribute("exam_list",active_exams);
		return "user_startpage";
	}

	@RequestMapping ("/login")
	public String login()
	{
		return "login";
	}

	@RequestMapping ("/logoutpage")
	public String logout()
	{
		return "logoutpage";
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
	 if (lit.hasNext()) { 
		  model.addAttribute("question",lit.next());
		  model.addAttribute("exam",exam);
		  model.addAttribute("iterator",lit);
		  model.addAttribute("count",count);
		  return "user_exampage";
		  
		 }
		  
		return "redirect:/submit";
	}
	@RequestMapping(value="/user_nextPage")
	public String userNextPage(Model model,@RequestParam String eId,@RequestParam String index,@RequestParam(name="optionid",required=false,defaultValue="0") String optionid,@RequestParam String count) throws Exception
	{
		Exam exam=examService.findById(eId);
		Set<Question> questions=exam.getQuestions();
		List<Question>list= new ArrayList<Question>();
		int pos=Integer.parseInt(index);
		for(Question quest:questions) 
		{
				list.add(quest);
		}
		 ListIterator<Question> lit = list.listIterator(pos);
		 
		 int marks=Integer.parseInt(count);
			marks=optService.setResult(marks, optionid);
		 System.out.println("result"+marks);
		 model.addAttribute("count",marks);
		 if (lit.hasNext()) { 
		 model.addAttribute("question",lit.next());
		 model.addAttribute("exam",exam);
		 model.addAttribute("iterator",lit);
		
		 return "user_exampage";
		 }
		return "redirect:/submit?count="+marks+"&eId="+eId;
	}
//	@RequestMapping("/user_previousPage")
//	public String userpreviousPage(Model model,Exam exam,@RequestParam String index,@RequestParam String optionid,@RequestParam String count) throws Exception
//	{
//		exam=examService.findActiveExam();
//		List<Question>questions=(List<Question>)exam.getQuestions();
//		int pos=Integer.parseInt(index);
//		 ListIterator<Question> lit = questions.listIterator(pos);
//		 
//		 int marks=Integer.parseInt(count);
//			marks=optService.setResult(marks, optionid);
//			 System.out.println("result prerer"+marks);
//			 model.addAttribute("count",marks);
//			 
//		 if (lit.hasPrevious()) { 
//		 model.addAttribute("question",lit.previous());
//		 model.addAttribute("exam",exam);
//		 model.addAttribute("iterator",lit);
//		 }
//		return "user_exampage";
//	}
	
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

	@RequestMapping ("/viewall_qstn")
	public String viewall_qstn(Model model) 
	{
		List<Question> questions=questService.findAll();
		model.addAttribute("questions",questions);	
		return "viewall_qstn";

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
//		LocalTime examTime=LocalTime.parse(time);
		exam.setTime(time);
		examService.save_exam(exam);
//		System.out.println("time-----------------"+examTime+"\n\n");
//		Set<Question> question=exam.getQuestions();
//		System.out.println("\n\n\nque"+question+"\n\n");
//		for(Question quest:question)
//		{
//			 questService.saveOrUpdate(quest,exam);
//		}
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
//		System.out.println("examd  que  fddfdf"+exam.getQuestions());
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




}




//@RequestMapping(value="/user_view")
//public String userview(Model model,@RequestParam String option,@RequestParam String qCount,@RequestParam String qId) throws Exception
//{
//	if(option!=null && qCount!=null && qId!=null)
//	{
//		
//	}
//	Exam exam=examService.findActiveExam();
//	for(Question qstn:exam.getQuestions())
//	{
//		model.addAttribute("qstn",qstn);
//	}
//	model.addAttribute("exam",exam);
//	return "user_view";
//}
