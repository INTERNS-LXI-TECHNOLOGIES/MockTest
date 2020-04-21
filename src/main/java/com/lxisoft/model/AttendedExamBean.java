package com.lxisoft.model;

import java.util.ArrayList;

public class AttendedExamBean {
	
	private String examName;
	
	private int score;
	
	private int total;
	
	private String result="Failed";
	
	private float percentage;
	
	private ArrayList<String> question;
	
	private ArrayList<String> options;
	
	
	private ArrayList<String> attended_opt;
	
	private boolean attended_answer=false;
	
	private String user;
	
	public String getExamName() {
		return examName;
	}
	
	public void setExamName(String examName) {
		this.examName = examName;
	}
	
	public int getScore() {
		return score;
	}
	
	public void setScore(int score) {
		this.score = score;
	}
	
	public int getTotal() {
		return total;
	}
	
	public void setTotal(int total) {
		this.total = total;
	}
	
	
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public float getPercentage() {
		return percentage;
	}
	
	public void setPercentage(float percentage) {
		this.percentage = percentage;
	}
	

	
	public ArrayList<String> getQuestion() {
		return question;
	}

	public void setQuestion(ArrayList<String> question) {
		this.question = question;
	}

	public ArrayList<String> getOptions() {
		return options;
	}

	public void setOptions(ArrayList<String> options) {
		this.options = options;
	}


	
	
	public ArrayList<String> getAttended_opt() {
		return attended_opt;
	}

	public void setAttended_opt(ArrayList<String> attended_opt) {
		this.attended_opt = attended_opt;
	}

	public boolean isAttended_answer() {
		return attended_answer;
	}

	public void setAttended_answer(boolean attended_answer) {
		this.attended_answer = attended_answer;
	}

	public String getUser() {
		return user;
	}
	
	public void setUser(String user) {
		this.user = user;
	}

	public AttendedExamBean(String examName, int score, int total, String result, float percentage,
			ArrayList<String> question, ArrayList<String> options, ArrayList<String> attended_opt, boolean attended_answer,
			String user) {
		super();
		this.examName = examName;
		this.score = score;
		this.total = total;
		this.result = result;
		this.percentage = percentage;
		this.question = question;
		this.options = options;
		this.attended_opt = attended_opt;
		this.attended_answer = attended_answer;
		this.user = user;
	}

	public AttendedExamBean() {
		
	}

	

	
	
	

}
