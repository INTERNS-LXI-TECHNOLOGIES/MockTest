package com.lxisoft.MockTest.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class UserRegistrationModel 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name="username")
	private String name; 

	@Column(name="email")
	
	private String email;  

	@Column(name="password")
	private String password;

	public String getName() 
	{  
	return name;  
	}  
	public void setName(String name) 
	{  
	this.name = name;  
	}  
	public String getEmail() 
	{  
	return email;  
	}  
	public void setEmail(String email) 
	{  
	this.email = email;  
	} 
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
