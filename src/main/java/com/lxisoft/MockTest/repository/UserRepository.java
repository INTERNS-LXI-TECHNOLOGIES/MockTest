

package com.lxisoft.MockTest.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.lxisoft.MockTest.model.UserRegistration;


public interface UserRepository extends JpaRepository<UserRegistration, Long> 
{
	UserRegistration findByUsername(String username);
}

