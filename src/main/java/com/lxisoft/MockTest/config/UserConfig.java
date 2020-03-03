package com.lxisoft.MockTest.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder; 
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;




@Configuration
@EnableWebSecurity
public class UserConfig extends WebSecurityConfigurerAdapter 
{
	@Autowired
	private UserDetailsService userservice;
	
	 @Override
     protected void configure(HttpSecurity http) throws Exception {
         http
             .authorizeRequests()
                 .antMatchers("/index").permitAll()
                 .antMatchers("/userpage").access("hasRole('USER') or hasRole('ADMIN')")
                 .antMatchers("/adminpage").access("hasRole('ADMIN')")
                 .and().formLogin();
     }
	 
     @Override
     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
         auth.inMemoryAuthentication()
                   .withUser("admin").password("{noop}admin").roles("ADMIN")
                   .and().withUser("user").password("{noop}user").roles("USER");
     }
//	 @Bean
//	 public AuthenticationProvider authProvider()
//	 {
//		DaoAuthenticationProvider p=new DaoAuthenticationProvider();
//		p.setUserDetailsService(userservice);
//		p.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
//		 
//		return p;
//		 
//	 }
}
