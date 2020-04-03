package com.lxisoft.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.repository.QstnOptionRepository;

@Service
@Transactional
public class OptionService {

    private final Logger log = LoggerFactory.getLogger(OptionService.class);

    @Autowired
	private QstnOptionRepository optRepo;
    
//    @Transactional
//	public Question setOptionList(Question question,String ...opt) {
//
//		 Set<QstnOption> optionList = new HashSet<QstnOption>(); 
//		for(int i=0;i<opt.length;i++)
//		{
//
//			QstnOption option=new QstnOption();
//			option.setOption(opt[i]);
//			optionList.add(option);
//		}
//		question.setQstnOptions(optionList);
//		return question;
//	}
    
	public void save(QstnOption option) 
	{
		optRepo.save(option);
		
	}
	
	public void saveQstnOptn( Question question,String ...options) 
	{
		for(int i=0;i<options.length;i++)
		{
			QstnOption optn=new QstnOption();
			optn.setOption(options[i]);
			optn.setQuestion(question);
			save(optn);
		}
	}

	public QstnOption findById(String opt_Id) {
		long id=Integer.parseInt(opt_Id);
		QstnOption option=null;
			Optional< QstnOption> optional=optRepo.findById(id);
			if(optional.isPresent())
			{
				option=optional.get();
			}
		return option;
	}

	public int setResult(int count, String optionid) {
		System.out.println("hi babe"+optionid);
		QstnOption option=findById(optionid);
		System.out.println("hi babess"+option);
		if(option==null)
		{
			return count;
		}
		else {
		if(option.isIsAnswer()==true)
		count++;
		return count;}
	}

}
