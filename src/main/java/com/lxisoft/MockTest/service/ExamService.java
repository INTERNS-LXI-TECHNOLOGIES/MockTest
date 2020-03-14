package com.lxisoft.MockTest.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lxisoft.MockTest.model.Exam;
import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.model.UserRegistration;
import com.lxisoft.MockTest.repository.ExamRepo;
import com.lxisoft.MockTest.repository.QuestionRepository;

@Service
public class ExamService {

	@Autowired
	ExamRepo examRepo;
	@Autowired
	QuestionRepository qstnRepo;
	
	public List<Exam> findAll() {
		return examRepo.findAll();
	}	
	
	public Exam findById(String eId) throws Exception
	{
		long id=Integer.parseInt(eId);
		Exam exam=null;
		Optional<Exam> optional=examRepo.findById(id);
		if(optional.isPresent())
		{
			exam=optional.get();
		}
		else
			throw new Exception("Exam(id="+id+") not present. Sorry!!");
		return exam;
	}

	public void save_exam(Exam exam) throws Exception
	{
		List<Question> finalQstns=new ArrayList<Question>();
		List<Question> qstns=qstnRepo.findAll();
		Collections.shuffle(qstns);
		int neededCount=exam.getCount(),qstncount=0,c=0;
		String level=exam.getLevel();
		for(Question qstn:qstns)
		{
			if(qstn.getLevel().equals(level))
				qstncount++;
		}
		if(qstncount>=neededCount)
		{
			for(Question qstn:qstns)
			{
				if(qstn.getLevel().equals(level) && (c<neededCount))
				{
					c++;
					finalQstns.add(qstn);
				}
			}
		}
		else
			throw new Exception("less no. of questions available in database!!");
		
		exam.setQuestions(finalQstns);
		examRepo.save(exam);
	}
	
	public void deactivate() {
		List<Exam> examList=examRepo.findAll();
		for(Exam e: examList)
		{
			e.setActive(false);
			examRepo.save(e);
		}
	}
	
	public void update(Exam exam) {
		examRepo.save(exam);
	}
	
	public Exam findActiveExam() throws Exception {
		Exam exam=null;
		Optional<Exam> optional=examRepo.findByIsActive(true);
		if(optional.isPresent())
		{
			exam=optional.get();
		}
		else
			throw new Exception("something wrong in active exams");
		return exam;
	}

}
