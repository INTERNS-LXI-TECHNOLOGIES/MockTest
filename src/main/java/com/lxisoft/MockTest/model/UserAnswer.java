package com.lxisoft.MockTest.model;

import org.springframework.stereotype.Component;

@Component("UserAnswer")
public class UserAnswer {
	private long qstnId;
	private String userAns;
	
	
	public long getQstnId() {
		return qstnId;
	}
	public void setQstnId(long qstnId) {
		this.qstnId = qstnId;
	}
	public String getUserAns() {
		return userAns;
	}
	public void setUserAns(String userAns) {
		this.userAns = userAns;
	}

}
