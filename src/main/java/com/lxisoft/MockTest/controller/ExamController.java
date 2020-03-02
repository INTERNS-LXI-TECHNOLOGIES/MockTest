package com.lxisoft.MockTest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ExamController {
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
	
}
