package com.lxisoft.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.repository.UserExtraRepository;
import com.lxisoft.repository.UserRepository;
import com.lxisoft.web.ExamController;

@Service
public class UserExtraService {
	
	private final Logger log = LoggerFactory.getLogger(UserExtraService.class);
	@Autowired
	private UserExtraRepository extraRepo;
	@Autowired
	private UserRepository userRepo;
	
	public UserExtra currentUserExtra()
	{
		String login= SecurityContextHolder.getContext().getAuthentication().getName();
		Optional<User> optUser=userRepo.findOneByLogin(login);
		User currentUser=optUser.get();
		log.debug("user currently logged is :"+currentUser);
		
		Optional<UserExtra> optExtra=extraRepo.findById((long) 4);
		UserExtra userExtra=optExtra.get();
		// userExtra will already be saved while creating new user. so currentUser -> userExtra obtained
		return userExtra;
	}
}
