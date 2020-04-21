package com.lxisoft.jasper;

import java.util.ArrayList;
import java.util.List;

import com.lxisoft.model.AttendedExamBean;

public class AttendedExamBeanList {
	
public static List<AttendedExamBean> getDataBeanList()
	{ 
		
		List<AttendedExamBean> dataBeanList = new ArrayList<AttendedExamBean>(); 
//		dataBeanList.add(new AttendedExamBean("MockTest_Beginner",3,5,true,75,"java_certification","OCJP","SCJP","OCA","SCJP",false,"Ajith")); 
		return dataBeanList; 
	}

}
