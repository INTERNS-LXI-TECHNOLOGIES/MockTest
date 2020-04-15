package com.lxisoft.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashSet;
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
import org.springframework.web.multipart.MultipartFile;

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
		private OptionService optService;
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

		public List<Question> findByLevel(String level) {
			List<Question> finalQstns=new ArrayList<Question>(); 
			List<Question> qstns=findAll();
			for(Question quest:qstns)
				if(quest.getLevel().equalsIgnoreCase(level))
				{
					finalQstns.add(quest);
					log.info(quest.getLevel()+"level creating");
				}
			return finalQstns;
		}

		public List<Question> findByQstn(String searchQstn) {
			List<Question> finalQstns=new ArrayList<Question>(); 
			List<Question> qstns=findAll();
			for(Question quest:qstns)
				if(quest.getQstn().contains(searchQstn))
				{
					finalQstns.add(quest);
					log.info("quest get");
				}
			return finalQstns;
		}

		public void deleteQuestion(String qId) {
			long id=Integer.parseInt(qId);
			questRepo.deleteById(id);
		}

		public List<Question> getAllQuestionsFromExam(Exam exam) {
			Set<Question> questions=exam.getQuestions();
			List<Question> list = new ArrayList<Question>();
			for(Question quest:questions) 
			{
				list.add(quest);
			}
			return list;
		}

		public void saveFile(MultipartFile file) throws IOException {
			BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream()));
			String line;
			while((line=br.readLine())!=null)
			{
				String[] data=line.split(",");
				Question qstn=new Question();
				qstn.setQstn(data[0]);
				qstn.setLevel(data[1]);
				save(qstn);
				optService.saveQstnOptn(qstn,data[2],data[3],data[4]);
			}
		}
}