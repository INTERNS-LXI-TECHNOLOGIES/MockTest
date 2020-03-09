package com.lxisoft.MockTest.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lxisoft.MockTest.model.Exam;
import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.repository.ExamRepo;
import com.lxisoft.MockTest.repository.QuestionRepository;

@Service
public class ExamService {

	@Autowired
	ExamRepo examRepo;
	@Autowired
	QuestionRepository qstnRepo;

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

}
