package com.lxisoft.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.repository.UserExtraRepository;
import com.lxisoft.repository.UserRepository;

/**
 * Service class for managing Action in MocktestRestController.
 */
@Service
public class RestApiService {
	private final Logger log = LoggerFactory.getLogger(UserService.class);
	
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private UserExtraRepository extraRepo;
	public UserExtra currentUserExtra(String login)
	{
//		String login= SecurityContextHolder.getContext().getAuthentication().getName();
		Optional<User> optUser=userRepo.findOneByLogin(login);
		User currentUser=optUser.get();
		log.debug("user currently logged is :"+currentUser);
		Optional<UserExtra> optExtra=extraRepo.findById( currentUser.getId());
		UserExtra userExtra=optExtra.get();
		return userExtra;
	}


}
