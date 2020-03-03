package com.lxisoft.MockTest.service;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.UserRegistrationModel;
import com.lxisoft.MockTest.repository.ExamRepository;
import com.lxisoft.MockTest.repository.UserRegistrationRepository;

@Service
public class ExamService  
{
//	implements UserDetailsService
	
	@Autowired
	private ExamRepository repository;
	@Autowired
	private UserRegistrationRepository repo;


//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		UserRegistrationModel user=repo.findByUserName(username);
//		if(user==null)
//			throw new UsernameNotFoundException("The username not found");
//		return new UserPrincipal(user);
//	}
	
	public void saveService(UserRegistrationModel user)
	{
		
			repo.saveUser(user);
			
	}

}
