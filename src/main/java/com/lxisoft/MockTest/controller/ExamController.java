package com.lxisoft.MockTest.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


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
		if(isAdmin)
			return "adminpage";
		else
			return "redirect:/user_instruction";
	}
	
	@RequestMapping("/register")
	public String register(Model model)
	{
		model.addAttribute("userRegistration", new UserRegistration());
		return "registration";
	}
	
	@RequestMapping("/adminpage")
	public String admin()
	{
		return "adminpage";
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
	@RequestMapping("/user_instruction")
	public String user()
	{
		return "user_instruction";
	}
	@RequestMapping(value="/save")  
	public String save(@ModelAttribute @Valid UserRegistration user,BindingResult bindingResult)
	{  
		
		if (!bindingResult.hasErrors()) {
		service.saveService(user);  
		 }
		 return ((bindingResult.hasErrors()) ? "wrong" : "index");
	}  
	
	@RequestMapping("/question")
	public String question()
	{
		return "question";
	}
	@RequestMapping ("/userpage")
	public String user2()
	{
		return "userpage";
	}
//	@RequestMapping("/timer")
//	public String timer()
//	{
//		return "timer";
//	}
//	 
	
}

