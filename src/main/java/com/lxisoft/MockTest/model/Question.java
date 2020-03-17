package com.lxisoft.MockTest.model;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "question")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "qstn")
	private String qstn;
	
	public String getQstn() {
		return qstn;
	}


	public void setQstn(String qstn) {
		this.qstn = qstn;
	}

	@Column(name = "level")
	private String level;
		@Column(name="qstn")
		private String qstn;
	@OneToMany(mappedBy="question", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Collection<QstnOption> options;
	
	public long getId() {
		return id;
	}

	public Collection<QstnOption> getOptions() {
		return options;

	}

	public void setOptions(Collection<QstnOption> options) {
		this.options = options;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getQstn() {
		return qstn;
	}

	public void setQstn(String qstn) {
		this.qstn = qstn;
	}

	

}

