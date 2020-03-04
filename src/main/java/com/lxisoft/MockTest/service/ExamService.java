package com.lxisoft.MockTest.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.UserRegistrationModel;
import com.lxisoft.MockTest.repository.UserRegistrationRepository;

@Service
public class ExamService 
{
	@Autowired
	private UserRegistrationRepository repo;

	public void saveService(UserRegistrationModel user) {
		repo.saveUser(user);
		
	}
	
}
