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

}
