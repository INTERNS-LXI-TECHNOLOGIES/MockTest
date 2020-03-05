package com.lxisoft.MockTest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="user_registration")
public class UserRegistration 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull(message = "Username is required.")
	@Column(name="username")
	private String username; 

	@NotNull(message = "Email is required.")
	@Column(name="email")
	private String email;  

	@NotNull(message = "password is required.")
	@Column(name="password")
	private String password;
	
	@Column(name = "role")
    private String role="USER";
    
	public String getRole() {
		return role;
	}

	public String getName() 
	{  
	return username;  
	}  
	public void setName(String username) 
	{  
	this.username = username;  
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
