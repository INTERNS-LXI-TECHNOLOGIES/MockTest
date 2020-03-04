package com.lxisoft.MockTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lxisoft.MockTest.model.UserRegistrationModel;


public interface ExamRepository extends JpaRepository<UserRegistrationModel, Long> 
{
	UserRegistrationModel findByUsername(String username);

}
