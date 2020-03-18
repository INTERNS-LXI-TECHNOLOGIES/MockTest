package com.lxisoft.MockTest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lxisoft.MockTest.model.QstnOption;
import com.lxisoft.MockTest.model.Question;
import com.lxisoft.MockTest.repository.OptionRepository;


@Service
public class OptionService {
	@Autowired
	private OptionRepository optRepo;
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



	

}



