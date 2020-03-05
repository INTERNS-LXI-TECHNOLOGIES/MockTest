package com.lxisoft.MockTest.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.lxisoft.MockTest.model.ExamUserDetails;
import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.repository.UserRegistrationRepository;
import com.lxisoft.MockTest.repository.UserRepository;

@Service
public class ExamService implements UserDetailsService
{
	@Autowired
	private UserRegistrationRepository repo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserRegistration user=userRepo.findByUsername(username);
		if(user==null)
			throw new UsernameNotFoundException("user not found");
		return new ExamUserDetails(user);
	}
	
	public void saveService(UserRegistration user) {
		repo.saveUser(user);
		
	}
	
}
