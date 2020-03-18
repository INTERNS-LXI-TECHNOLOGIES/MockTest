package com.lxisoft.MockTest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.Exam;
import com.lxisoft.MockTest.model.QstnOption;
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

	public void update(Question question) {
		questRepo.save(question);
		
	}

	public Question findById(String qstn_id) {
		long id=Integer.parseInt(qstn_id);
		Question quest=null;
			Optional< Question> optional=questRepo.findById(id);
			if(optional.isPresent())
			{
				quest=optional.get();
			}
		return quest;
		
	}


}
