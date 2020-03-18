package com.lxisoft.MockTest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.QstnOption;
import com.lxisoft.MockTest.model.Question;

@Service
public class OptionService {
	
	public Question setOptionList(Question question,String ...opt) {
		List<QstnOption> optionList=new ArrayList<QstnOption>();
		for(int i=0;i<opt.length;i++)
		{
			QstnOption option=new QstnOption();
			option.setOpt(opt[i]);
			optionList.add(option);
		}
		question.setOptions(optionList);
		return question;
	}

//	public void setAnswer(Question qstn, String opt) {
//		List<QstnOption> optionList=new ArrayList<QstnOption>();
//		QstnOption option=new QstnOption();
//		if(opt.equals(option.getOpt()))
//		option.setOpt(opt);
//		qstn.setOptions(optionList);
//		System.out.println("jhjkhjk"+option.getId());
//		System.out.println("pass"+opt);
//		option.setAnswer(true);
//		optionList.add(option);
//		qstn.setOptions(optionList);
//		
//	}


	

}



