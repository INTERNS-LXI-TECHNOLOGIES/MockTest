package com.lxisoft.MockTest.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
@Entity
@Table(name="exam")
public class Exam 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column
	private int count;
	
	@Column
	private String level;
	
	@Column
	private int time_hr;
	
	@Column
	private int time_min;
	
	 @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	    @JoinTable(name = "exam_qstns",joinColumns = @JoinColumn(name = "exam_id", referencedColumnName = "id"),
	        inverseJoinColumns = @JoinColumn(name = "question_id", referencedColumnName = "id"))
	 private Collection<Question> questions;
	 
	public Collection<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Collection<Question> questions) {
		this.questions = questions;
	}

	public Exam() {
		
	}
	
	public Exam(long id, int count, String level, int time_hr, int time_min, Collection<Question> questions) {
		super();
		this.id = id;
		this.count = count;
		this.level = level;
		this.time_hr = time_hr;
		this.time_min = time_min;
		this.questions = questions;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public int getTime_hr() {
		return time_hr;
	}

	public void setTime_hr(int time_hr) {
		this.time_hr = time_hr;
	}

	public int getTime_min() {
		return time_min;
	}

	public void setTime_min(int time_min) {
		this.time_min = time_min;
	}
	
}
