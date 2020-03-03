package com.lxisoft.MockTest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.lxisoft.MockTest.model.UserRegistrationModel;
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
	public String register()
	{
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
	public String save(@ModelAttribute UserRegistrationModel user,@RequestParam String name,@RequestParam String email,@RequestParam String password,@RequestParam String cpw)
	{  
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		service.saveService(user);  
		  
	return "index";
 
	}  
	 
	
}
