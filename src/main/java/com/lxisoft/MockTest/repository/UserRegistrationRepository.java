package com.lxisoft.MockTest.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lxisoft.MockTest.model.UserRegistrationModel;

@Repository
@Transactional 
public class UserRegistrationRepository 
{
	@PersistenceContext
    private EntityManager em;


	public void saveUser(UserRegistrationModel user) 
	{
		em.persist(user);
	}

}
