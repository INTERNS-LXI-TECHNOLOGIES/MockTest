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
	private QuestionRepository quest;

	public List<Question> findAll() {
		List<Question> question=quest.findAll();
		return question;
	}

	public void save(Question question) {
		quest.save(question);
		
	}
}
