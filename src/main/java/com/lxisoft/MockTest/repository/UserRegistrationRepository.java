package com.lxisoft.MockTest.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lxisoft.MockTest.model.UserRegistration;

@Repository
@Transactional 
public class UserRegistrationRepository 
{
	@PersistenceContext
    private EntityManager em;


	public void saveUser(UserRegistration user) 
	{
		em.persist(user);
	}

}
