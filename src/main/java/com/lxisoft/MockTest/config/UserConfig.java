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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.service.ExamService;

@Configuration
@EnableWebSecurity
public class UserConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService userDetailsService;
	
	
	 @Bean
		public AuthenticationProvider authenticationProvider() {
			DaoAuthenticationProvider provider =new DaoAuthenticationProvider();
			provider.setUserDetailsService(userDetailsService);
			provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
			
			return provider;
		}

	 @Override
	  public void configure(AuthenticationManagerBuilder auth) throws Exception {
	      auth.authenticationProvider(authenticationProvider());
	      
	  }

	 
	 @Override
     protected void configure(HttpSecurity http) throws Exception {
         http
             .authorizeRequests()
                 .antMatchers("/user_instruction").hasRole("USER")
                 .antMatchers("/adminpage").hasRole("ADMIN")
                 .and().formLogin().loginPage("/login");
     }

}
