package com.lxisoft.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletRequest;

import com.lxisoft.domain.Authority;
import com.lxisoft.domain.Exam;
import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.repository.UserExtraRepository;
import com.lxisoft.repository.UserRepository;
import com.lxisoft.web.ExamController;

import io.github.jhipster.security.RandomUtil;

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
		Optional<UserExtra> optExtra=extraRepo.findById( currentUser.getId());
		UserExtra userExtra=optExtra.get();
		// userExtra will already be saved while creating new user. so currentUser -> userExtra obtained
		return userExtra;
	}

	public  List<User> findAll() {
		return userRepo.findAll() ;
	}

	public UserExtra findById(String uid) throws Exception {
			long id=Integer.parseInt(uid);
			Optional<User>user=userRepo.findById(id);
			User currentUser=user.get();
			Optional<UserExtra> optExtra=extraRepo.findById(currentUser.getId());
			UserExtra userExtra=optExtra.get();
			return userExtra;
	}

	public void save(@Valid User user) {
		BCryptPasswordEncoder encode=new BCryptPasswordEncoder(); 
		user.setPassword(encode.encode(user.getPassword()));
		Set<Authority> authorities = new HashSet<>();
		authorities.add(new Authority("ROLE_USER"));		
		user.setAuthorities(authorities);
		user.setActivated(true);
		UserExtra user_extra=new UserExtra();
		user_extra.setUser(user);
		log.debug("user  is :"+user_extra.getUser());
		extraRepo.save(user_extra);
		userRepo.save(user);

		

	}

	



	
}
