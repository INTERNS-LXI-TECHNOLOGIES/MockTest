package com.lxisoft.model;

import java.util.Set;

import com.lxisoft.domain.Exam;
import com.lxisoft.domain.Question;

/**
 * Exam model  for transferring the data to Front end
 */
public class ExamModel {
	private Set<Question> questions;
	private Exam exam;
	public Set<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}
	public Exam getExam() {
		return exam;
	}
	public void setExam(Exam exam) {
		this.exam = exam;
	}
	

}
