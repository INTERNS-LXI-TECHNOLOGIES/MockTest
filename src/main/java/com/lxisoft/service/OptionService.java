package com.lxisoft.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
	public Question setOptionList(Question question,String ...opt) {

		 Set<QstnOption> optionList = new HashSet<QstnOption>(); 
		for(int i=0;i<opt.length;i++)
		{
//			System.out.println("lenght------"+opt[i]);
			QstnOption option=new QstnOption();
//			option.option(opt[i]);
			option.setOption(opt[i]);
			save(option);
			optionList.add(option);
		}
//		System.out.println(optionList);
		question.setQstnOptions(optionList);
		return question;
	}
	private void save(QstnOption option) {
		optRepo.save(option);
		
	}

//	public QstnOption findById(String opt_Id) {
//		long id=Integer.parseInt(opt_Id);
//		QstnOption option=null;
//			Optional< QstnOption> optional=optRepo.findById(id);
//			if(optional.isPresent())
//			{
//				option=optional.get();
//			}
//		return option;
//	}

//	public int setResult(int count, String optionid) {
//		QstnOption option=findById(optionid);
//		if(option.isAnswer()==true)
//		count++;
//		return count;
//	}

}
