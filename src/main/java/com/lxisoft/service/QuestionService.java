package com.lxisoft.service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lxisoft.domain.Exam;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.repository.QstnOptionRepository;
import com.lxisoft.repository.QuestionRepository;

@Service
@Transactional
public class QuestionService {

    private final Logger log = LoggerFactory.getLogger(QuestionService.class);
  
   
	    
        @Autowired
    	private QuestionRepository questRepo;

        public List<Question> findAll() {
    		List<Question> question=questRepo.findAll();
    		return question;
    	}

    	public void saveOrUpdate(Question question, Exam exam) {
    		//question.setExam(exam);
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

		public void save(@Valid Question question) 
		{
			
			questRepo.save(question);
		}
}