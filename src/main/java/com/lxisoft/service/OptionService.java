package com.lxisoft.service;

import java.util.ArrayList;
import java.util.List;

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
    		List<QstnOption> optionList=new ArrayList<QstnOption>();
    		for(int i=0;i<opt.length;i++)
    		{
    			QstnOption option=new QstnOption();
    			option.setOption(opt[i]);
    			optionList.add(option);
    		}
    		question.setQstnOptions(optionList);
    		return question;
    	}

//    	public QstnOption findById(String opt_Id) {
//    		long id=Integer.parseInt(opt_Id);
//    		QstnOption option=null;
//    			Optional< QstnOption> optional=optRepo.findById(id);
//    			if(optional.isPresent())
//    			{
//    				option=optional.get();
//    			}
//    		return option;
//    	}

//    	public int setResult(int count, String optionid) {
//    		QstnOption option=findById(optionid);
//    		if(option.isAnswer()==true)
//    		count++;
//    		return count;
//    	}

}
