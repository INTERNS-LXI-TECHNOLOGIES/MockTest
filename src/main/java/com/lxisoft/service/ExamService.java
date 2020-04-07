package com.lxisoft.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lxisoft.domain.Exam;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.repository.ExamRepository;
import com.lxisoft.repository.QuestionRepository;

@Service
@Transactional
public class ExamService {

    private final Logger log = LoggerFactory.getLogger(ExamService.class);
    @Autowired
    ExamRepository examRepo;
	@Autowired
	QuestionRepository qstnRepo;
	@Autowired
	QuestionService qstService;
	
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
	{System.out.println("exam sevice inside for");
//		List<Question> finalQstns=new ArrayList<Question>();
		Set<Question> finalQstns = new HashSet<Question>(); 
		List<Question> qstns=qstService.findAll();
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
	
	public void update(Exam exam) {
		examRepo.save(exam);
	}
	public Set<Exam> findActiveExams() throws Exception
	{
		List<Exam> exam_list=findAll();
		Set<Exam> final_list = new HashSet<Exam>();
		for(Exam e:exam_list)
		{
//			System.out.println("exam sevice inside for");
			if(e.isIsActive()==true)
			{
//				System.out.println("exam sevice inside for   ex name"+e.getName());
				final_list.add(e);
			}
		}
		return final_list;
	}
}
