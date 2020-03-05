package com.lxisoft.MockTest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

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
		return "user_registration";
	}
	
	@RequestMapping("/adminpage")
	public String admin()
	{
		return "adminpage";
	}
	
	@RequestMapping("/userpage")
	public String user()
	{
		return "userpage";
	}
	@RequestMapping(value="/save")  
	public String save(@ModelAttribute UserRegistration user,@RequestParam String name,@RequestParam String email,@RequestParam String password,@RequestParam String cpw)
	{  
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		service.saveService(user);  
	return "index";
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
	@RequestMapping("/timer")
	public String timer()
	{
		return "timer";
	}
	 
	
}

