package com.lxisoft.MockTest.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
	private QuestionService questRepo;

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
	public String setTimer(Model model,@ModelAttribute SetTimerModel timer1)
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
	public String save(@ModelAttribute @Valid UserRegistration user,BindingResult bindingResult,@RequestParam String cpw)
	{  
		if (!bindingResult.hasErrors()) {
			if(user.getPassword().equals(cpw))
			service.saveService(user);  
			else return "registration";
			
		}
		return ((bindingResult.hasErrors()) ? "wrong" : "redirect:/");
	}  

	@RequestMapping("/question")
	public String question(Model model)
	{
		model.addAttribute("question",new Question());
		return "question";
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

	@RequestMapping(value="/user_view", method=RequestMethod.GET)
	public String userview(Model model)
	{
		
		List<Question> question=questRepo.findAll();
		for(Question quest:question)
		{
		model.addAttribute("questions",quest);	
		}
		return "user_view";
	}

	@RequestMapping("create_question")
	public String createExam(@ModelAttribute Question question)
	{
//		quest.save(question);
		
	return "question";
	}

	@RequestMapping ("/viewall_qstn")
	public String viewall_qstn() 
	{
		return "viewall_qstn";

	}
}

