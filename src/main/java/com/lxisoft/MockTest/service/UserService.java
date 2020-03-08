package com.lxisoft.MockTest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.lxisoft.MockTest.config.ExamUserDetails;
import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.repository.UserRepository;

@Service
public class UserService implements UserDetailsService
{	
	@Autowired
	private UserRepository userRepo;

	@Override
	
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserRegistration user=userRepo.findByUsername(username);
		if(user==null)
			throw new UsernameNotFoundException("user not found");
		return new ExamUserDetails(user);
	}
	
	public void saveService(UserRegistration user)
	{
		userRepo.save(user);
	}

	public List<Question> findall(Question quest) {
		userRepo.findAll();
		return null;
	}
	
}
