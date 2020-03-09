package com.lxisoft.MockTest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.repository.QuestionRepository;

@Service
public class QuestionService  
{
	@Autowired
	private QuestionRepository questRepo;

	public List<Question> findAll() {
		List<Question> question=questRepo.findAll();
		return question;
	}

	public void save(Question question) {
		questRepo.save(question);
		
	}
}
