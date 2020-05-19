package com.lxisoft.web.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.lxisoft.service.UserService;
import com.lxisoft.service.dto.UserDTO;

import io.github.jhipster.web.util.PaginationUtil;

/**
 * MocktestControllerResource controller
 */
@RestController
@RequestMapping("/api/mocktest-controller")
public class MocktestControllerResource {

    private final Logger log = LoggerFactory.getLogger(MocktestControllerResource.class);
//    private UserService userService;
    @Autowired 
    UserResource userRes;
    
    /**
    * GET getRegistrationDetails
    */
    @GetMapping("/get-registration-details")
    public String getRegistrationDetails() {
        return "getRegistrationDetails";
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<UserDTO>> getAll() {
    	Pageable pageable=null;
    	return userRes.getAllUsers(pageable);
        
    }
    

}
