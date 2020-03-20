package com.lxisoft.MockTest.controller;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.lxisoft.MockTest.model.AttendedExam;
import com.lxisoft.MockTest.model.Exam;
import com.lxisoft.MockTest.model.QstnOption;
import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.model.SetTimerModel;
import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.service.OptionService;
import com.lxisoft.MockTest.service.QuestionService;
import com.lxisoft.MockTest.service.UserService;

@Controller
public class ExamController
{
	@Autowired
	private OptionService optService;
	@Autowired
	private com.lxisoft.MockTest.service.ExamService examService;
	@Autowired
	private UserService service;
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
			return "user_instruction";
		else 
			return "redirect:/login";
	
	}

	@RequestMapping("/register")
	public String register(Model model)
	{
		model.addAttribute("userRegistration", new UserRegistration());
		return "registration";
	}

	@RequestMapping("/timer")
	public String setTimer(Model model, SetTimerModel timer1)
	{
		model.addAttribute("timer",timer1);
		return "setTimer";
	}
	@RequestMapping("/setTime")
	public String setTime()
	{

		return "userpage";
	}

	@RequestMapping("/submit")
	public String submit(@RequestParam String count)
	{
		AttendedExam attended=new AttendedExam();
		
		return "submit";
	}

	@RequestMapping(value="/save")  
	public String save(@Valid UserRegistration user,BindingResult bindingResult,@RequestParam String cpw)
	{  
		if (!bindingResult.hasErrors()) {
			if(user.getPassword().equals(cpw))
				service.saveService(user);  
			else
				return "registration";

		}
		return ((bindingResult.hasErrors()) ? "registration" : "redirect:/");
	}  


	@RequestMapping ("/user_startpage")
	public String userpage()
	{
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


	@RequestMapping ("/create_exam")
	public String create_exam(Model model)
	{
		model.addAttribute("exam",new Exam());	 
		return "create_exam";
	}

	@RequestMapping ("/save_exam")
	public String save_exam(Exam exam) throws Exception
	{
		examService.save_exam(exam);
		return "redirect:/";
	}

	@RequestMapping(value="/user_exam")
	public String userview(Model model) throws Exception
	{
		Exam exam=examService.findActiveExam();
		List<Question> questions=(List<Question>)exam.getQuestions();
		 ListIterator<Question> lit = questions.listIterator(); 
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

	@RequestMapping("/user_nextPage")
	public String userNextPage(Model model,Exam exam,@RequestParam String index,@RequestParam String optionid,@RequestParam String count) throws Exception
	{
		exam=examService.findActiveExam();
		List<Question>questions=(List<Question>)exam.getQuestions();
		int pos=Integer.parseInt(index);
		 ListIterator<Question> lit = questions.listIterator(pos);
		 
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
		return "redirect:/submit?count="+count;
	}

	@RequestMapping("/user_previousPage")
	public String userpreviousPage(Model model,Exam exam,@RequestParam String index,@RequestParam String optionid,@RequestParam String count) throws Exception
	{
		exam=examService.findActiveExam();
		List<Question>questions=(List<Question>)exam.getQuestions();
		int pos=Integer.parseInt(index);
		 ListIterator<Question> lit = questions.listIterator(pos);
		 
		 int marks=Integer.parseInt(count);
			marks=optService.setResult(marks, optionid);
			 System.out.println("result prerer"+marks);
			 model.addAttribute("count",marks);
			 
		 if (lit.hasPrevious()) { 
		 model.addAttribute("question",lit.previous());
		 model.addAttribute("exam",exam);
		 model.addAttribute("iterator",lit);
		 }
		return "user_exampage";
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
		question=optService.setOptionList(question,opt1,opt2,opt3);
		if (!bindingResult.hasErrors()) {
		 questService.save(question);
	      return "redirect:/";}
	    else return "create_question";

	}
	@RequestMapping(value="/addmore_question")
	public String addmore( @Valid Question ques,Model model,BindingResult binding,@RequestParam String opt1,@RequestParam String opt2,@RequestParam String opt3) 
	{
		optService.setOptionList(ques,opt1,opt2,opt3);
		if(!binding.hasErrors()) {
		questService.save(ques);
		model.addAttribute("question",new Question());
		return "create_question";}
		else return "create_question";

	}

	@RequestMapping ("/viewall_qstn")
	public String viewall_qstn(Model model) 
	{
		List<Question> questions=questService.findAll();
		model.addAttribute("questions",questions);	
		return "viewall_qstn";

	}

	@RequestMapping("/error")
	public String handleError(HttpServletRequest request) {
	    Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
	     
	    if (status != null) {
	        Integer statusCode = Integer.valueOf(status.toString());
	     
	        if(statusCode == HttpStatus.NOT_FOUND.value()) {
	            return "error-404";
	        }
	        else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
	            return "error-500";
	        }
	    }
	    return "error";
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
		return "selectExam";
	}
	
	@RequestMapping ("/activate_exam")
	public String activate_exam(@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		examService.deactivate(); 
		
		exam.setActive(true);
		examService.update(exam);
		return "redirect:/selectExam?eId="+eId;
	}
	
	@RequestMapping ("/set_Answer")
	public String setAnswer(@RequestParam String opt_Id,@RequestParam String qstn_id)
	{
		Question question=questService.findById(qstn_id);
		QstnOption qstn_optn=optService.findById(opt_Id);
		if(qstn_optn.isAnswer()==false)
			qstn_optn.setAnswer(true);
		else 
			qstn_optn.setAnswer(false);
		questService.update(question);
		return "redirect:/viewall_qstn";
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
}

