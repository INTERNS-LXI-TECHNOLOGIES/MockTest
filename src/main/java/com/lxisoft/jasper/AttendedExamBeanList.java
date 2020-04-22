package com.lxisoft.jasper;

import java.util.ArrayList;
import java.util.List;

import com.lxisoft.model.AttendedExamBean;

public class AttendedExamBeanList {
	
public static List<AttendedExamBean> getDataBeanList()
	{ 
		AttendedExamBean bean;
		List<AttendedExamBean> dataBeanList = new ArrayList<AttendedExamBean>(); 
//		dataBeanList.add(new AttendedExamBean(bean.getExamName(),bean.getScore(),bean.getTotal(),bean.getResult()
//				,bean.getPercentage(),bean.getQuestion(),bean.getOptions(),bean.getAttended_opt(),
//				bean.isAttended_answer(),bean.getUser()));
		return dataBeanList; 
	}

}
