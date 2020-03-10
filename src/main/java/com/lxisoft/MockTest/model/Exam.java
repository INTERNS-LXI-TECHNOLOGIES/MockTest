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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
@Entity
@Table(name="exam")
public class Exam 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotEmpty(message = "Exam_name is required.")
	@Column
	private String exam_name;

	@NotEmpty(message = "count is required.")
	@Column
	private int count;
	
	@NotEmpty(message = "level is required.")
	@Column
	private String level;
	
	@NotEmpty(message = "time is required.")
	@Column
	private int time_hr;
	
	@NotEmpty(message = "time is required.")
	@Column
	private int time_min;
	
	@Column 
	private boolean isActive=false;
	
	 public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	 
	@OneToMany(cascade = CascadeType.ALL)
	 @JoinTable(name = "exam_qstns",joinColumns = @JoinColumn(name = "exam_id", referencedColumnName = "id"),
     inverseJoinColumns = @JoinColumn(name = "question_id", referencedColumnName = "id"))
	private Collection<Question> questions;
	
	public Collection<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Collection<Question> questions) {
		this.questions = questions;
	}

	public String getExam_name() {
		return exam_name;
	}

	public void setExam_name(String exam_name) {
		this.exam_name = exam_name;
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
