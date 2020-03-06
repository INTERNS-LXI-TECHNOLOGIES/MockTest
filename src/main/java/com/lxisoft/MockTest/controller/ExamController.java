package com.lxisoft.MockTest.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



import com.lxisoft.MockTest.model.SetTimerModel;
import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.service.ExamService;

@Controller
public class ExamController
{
	@Autowired
	private ExamService service;
	
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
	@RequestMapping("/sampleview")
	public String sampleView()
	{
		return "sampleView";
	}
	
	@RequestMapping("/submit")
	public String submit()
	{
	 
		return "submit";
	}
	
	@RequestMapping(value="/save")  
	public String save(@ModelAttribute @Valid UserRegistration user,BindingResult bindingResult, @RequestParam String cpw)
	{  
		if (!bindingResult.hasErrors()) {
			if(user.getPassword().equals(cpw))
		service.saveService(user);  
			else return "registration";
		 }
		 return ((bindingResult.hasErrors()) ? "wrong" : "login");
	}  
	
	@RequestMapping("/question")
	public String question()
	{
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
	
	@RequestMapping ("/logout")
	public String logout()
	{
		return "logout";
	}
	@RequestMapping("/deletequestion")
	public String Deletequestion()
	{
	 
		return "viewall_qstn";
	}
}

