package com.lxisoft.MockTest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class UserConfig extends WebSecurityConfigurerAdapter {
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
}
