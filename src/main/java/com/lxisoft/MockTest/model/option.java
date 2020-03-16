package com.lxisoft.MockTest.model;

public class option 
{
private long id;
private String optionName;
private boolean isAnswer;
public boolean isAnswer() {
	return isAnswer;
}
public void setAnswer(boolean isAnswer) {
	this.isAnswer = isAnswer;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getOptionName() {
	return optionName;
}
public void setOptionName(String optionName) {
	this.optionName = optionName;
}
}
