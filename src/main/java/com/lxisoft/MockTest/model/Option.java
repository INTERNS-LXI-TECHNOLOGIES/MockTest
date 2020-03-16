package com.lxisoft.MockTest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "option")
public class Option 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
	@NotEmpty(message = "option is required.")
	@Column(name = "optionName")
private String optionName;
	@NotEmpty(message = "Answer is required.")
	@Column(name = "isAnswer")
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
