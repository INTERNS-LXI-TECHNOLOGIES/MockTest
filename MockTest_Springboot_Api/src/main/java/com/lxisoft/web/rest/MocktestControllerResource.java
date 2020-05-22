package com.lxisoft.web.rest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.lxisoft.service.UserService;
import com.lxisoft.service.dto.UserDTO;

import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

/**
 * MocktestControllerResource controller
 */
@RestController
@RequestMapping("/api/mocktest-controller")
public class MocktestControllerResource {

    private final Logger log = LoggerFactory.getLogger(MocktestControllerResource.class);
    @Autowired 
    UserService userService;
    @Autowired 
    UserResource userRes;
    
    /**
    * GET getRegistrationDetails
    */
  
    
    @GetMapping("/all")
   @CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
    public ResponseEntity<List<UserDTO>> getAll() {
    	Pageable pageable=null;
    	return userRes.getAllUsers(pageable);
        
    }
    // @GetMapping("/authenticate")
    // public String isAuthenticated(HttpServletRequest request) {
    //     log.debug("REST request to check if the current user is authenticated");
    //     return request.getRemoteUser();
    // }

    


}
