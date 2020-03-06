package com.lxisoft.MockTest.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
		return "index";
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
	
		return "userpage2";
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
	@RequestMapping("/userpage")
	public String user()
	{
		return "userpage";
	}
	@RequestMapping(value="/save")  
	public String save(@ModelAttribute @Valid UserRegistration user,BindingResult bindingResult, @RequestParam String cpw)
	{  
		if (!bindingResult.hasErrors()) {
			if(user.getPassword().equals(cpw))
		service.saveService(user);  
			else return "registration";
		 }
		 return ((bindingResult.hasErrors()) ? "wrong" : "index");
	}  
	
	@RequestMapping("/question")
	public String question()
	{
		return "question";
	}
	@RequestMapping ("/userpage2")
	public String user2()
	{
		return "userpage2";
	}
	 
	
}

