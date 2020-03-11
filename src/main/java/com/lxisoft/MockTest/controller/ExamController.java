package com.lxisoft.MockTest.controller;

import java.util.Collection;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.lxisoft.MockTest.model.Exam;
import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.model.SetTimerModel;
import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.service.QuestionService;
import com.lxisoft.MockTest.service.UserService;

@Controller
public class ExamController
{
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
	@RequestMapping("/Displaysets")
	public String sampleView()
	{
		return "questionpapers";
	}

	@RequestMapping("/submit")
	public String submit()
	{

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

	@RequestMapping("/question")
	public String question(Model model)
	{
		model.addAttribute("question",new Question());
		return "create_question";
	}

	@RequestMapping ("/userpage")
	public String userpage()
	{
		return "userpage";
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

	@RequestMapping(value="/user_view")
	public String userview(Model model) throws Exception
	{
		Exam exam=examService.findActiveExam();
		System.out.println("active is----"+exam.getExam_name());
		model.addAttribute("questions",exam.getQuestions());
		model.addAttribute("exam",exam);
		return "user_view";
	}

	@RequestMapping(value="/create_question")
	public String createExam( @Valid Question question ,BindingResult bindingResult)
	{
		if (!bindingResult.hasErrors()) {
		 questService.save(question);
	      return "redirect:/";}
	    else return"create_question";

	}

	@RequestMapping ("/viewall_qstn")
	public String viewall_qstn(Model model) 
	{
		List<Question> questions=questService.findAll();
		model.addAttribute("questions",questions);	
		return "viewall_qstn";

	}
	@RequestMapping(value="/addmore")
	public String addmore( @Valid Question ques,Model model,BindingResult binding) 
	{
		if(!binding.hasErrors()) {
		questService.save(ques);
		model.addAttribute("question",new Question());
		return "create_question";}
		else return"create_question";

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
	
}

