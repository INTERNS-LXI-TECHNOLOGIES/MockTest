package com.lxisoft.MockTest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="question")
public class Questions 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="qstn")
	private String qstn;
	
	@Column(name="options")
	private String options;
	
	@Column(name="answer")
	private String answer;
	
	@Column(name="level")
	private String level;

	public String getQstn() {
		return qstn;
	}

	public void setQstn(String qstn) {
		this.qstn = qstn;
	}

	public String getOptions() {
		return options;
	}

	public void setOptions(String options) {
		this.options = options;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
}
