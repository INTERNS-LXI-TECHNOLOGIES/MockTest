package com.lxisoft.MockTest.model;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="attended_exam")
public class AttendedExam {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column
	private int score;
	
	@Column
	private int total;
	
	@Column
	private boolean result;
	
//	@OneToOne
//	@JoinColumn(name="attended_id")
//	private UserRegistration user;
//	
//	@OneToOne
//	@JoinColumn(name="attendedexam_id")
//	private Exam exam;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

//	public UserRegistration getUser() {
//		return user;
//	}
//
//	public void setUser(UserRegistration user) {
//		this.user = user;
//	}
//
//	public Exam getExam() {
//		return exam;
//	}
//
//	public void setExam(Exam exam) {
//		this.exam = exam;
//	}
//	
}
