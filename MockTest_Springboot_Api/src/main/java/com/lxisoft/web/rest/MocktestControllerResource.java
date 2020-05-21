package com.lxisoft.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MocktestControllerResource controller
 */
@RestController
@RequestMapping("/api/mocktest-controller")
@CrossOrigin(origins = "http://localhost:8100")
public class MocktestControllerResource {

    private final Logger log = LoggerFactory.getLogger(MocktestControllerResource.class);
    
    /**
     * View authenticated pages or redirect index page 
     * @return index
     */
	@RequestMapping(value="/")
	public String index()
	{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		boolean isAdmin=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
		boolean isUser=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_USER"));
//		if(isAdmin)
//			return "admin";
//		else if(isUser)
//			return "user";
//		else 
			return "ashiq";
	}
	
	
    /**
    * GET getRegistrationDetails
    */
    @GetMapping("/get-registration-details")
    public String getRegistrationDetails() {
        return "getRegistrationDetails";
    }
    
    

}
