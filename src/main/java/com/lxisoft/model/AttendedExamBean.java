package com.lxisoft.model;

public class AttendedExamBean {
	
	private String examName;
	
	private int score;
	
	private int total;
	
	private boolean result;
	
	private float percentage;
	
	private String question;
	
	private String option1;
	
	private String option2;
	
	private String option3;
	
	private String attended_opt;
	
	private String attended_answer;
	
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
	
	public boolean isResult() {
		return result;
	}
	
	public void setResult(boolean result) {
		this.result = result;
	}
	
	public float getPercentage() {
		return percentage;
	}
	
	public void setPercentage(float percentage) {
		this.percentage = percentage;
	}
	
	public String getQuestion() {
		return question;
	}
	
	public void setQuestion(String question) {
		this.question = question;
	}
	
	public String getOption1() {
		return option1;
	}
	
	public void setOption1(String option1) {
		this.option1 = option1;
	}
	
	public String getOption2() {
		return option2;
	}
	
	public void setOption2(String option2) {
		this.option2 = option2;
	}
	
	public String getOption3() {
		return option3;
	}
	
	public void setOption3(String option3) {
		this.option3 = option3;
	}
	
	public String getAttended_opt() {
		return attended_opt;
	}
	
	public void setAttended_opt(String attended_opt) {
		this.attended_opt = attended_opt;
	}
	
	public String getAttended_answer() {
		return attended_answer;
	}
	
	public void setAttended_answer(String attended_answer) {
		this.attended_answer = attended_answer;
	}
	
	public String getUser() {
		return user;
	}
	
	public void setUser(String user) {
		this.user = user;
	}

	public AttendedExamBean(String examName, int score, int total, boolean result, float percentage, String question,
			String option1, String option2, String option3, String attended_opt, String attended_answer, String user) {
		super();
		this.examName = examName;
		this.score = score;
		this.total = total;
		this.result = result;
		this.percentage = percentage;
		this.question = question;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.attended_opt = attended_opt;
		this.attended_answer = attended_answer;
		this.user = user;
	}

	public AttendedExamBean() {
		
		
	}
	
	

}
