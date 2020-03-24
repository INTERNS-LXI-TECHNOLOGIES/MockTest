package com.lxisoft.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ControllerResource controller
 */
@Controller
public class ControllerResource {

    private final Logger log = LoggerFactory.getLogger(ControllerResource.class);
    
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
    
    /**
    *  login
    */
    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    /**
    * create_exam
    */
    @GetMapping("/create-exam")
    public String create_exam() {
        return "create_exam";
    }

}
