package com.lxisoft.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.util.HashSet;
import java.util.Set;

/**
 * A Exam.
 */
@Entity
@Table(name = "exam")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Exam implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "count")
    private Integer count;

    @Column(name = "level")
    private String level;

    @Column(name = "is_active")
    private Boolean isActive=false;

    @OneToMany(mappedBy = "exam",fetch = FetchType.EAGER)
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Question> questions = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("exams")
    private AttendedExam attendedExam;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Exam name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCount() {
        return count;
    }

    public Exam count(Integer count) {
        this.count = count;
        return this;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getLevel() {
        return level;
    }

    public Exam level(String level) {
        this.level = level;
        return this;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public Boolean isIsActive() {
        return isActive;
    }

    public Exam isActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public Exam questions(Set<Question> questions) {
        this.questions = questions;
        return this;
    }

    public Exam addQuestion(Question question) {
        this.questions.add(question);
        question.setExam(this);
        return this;
    }

    public Exam removeQuestion(Question question) {
        this.questions.remove(question);
        question.setExam(null);
        return this;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    public AttendedExam getAttendedExam() {
        return attendedExam;
    }

    public Exam attendedExam(AttendedExam attendedExam) {
        this.attendedExam = attendedExam;
        return this;
    }

    public void setAttendedExam(AttendedExam attendedExam) {
        this.attendedExam = attendedExam;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Exam)) {
            return false;
        }
        return id != null && id.equals(((Exam) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Exam{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", count=" + getCount() +
            ", level='" + getLevel() + "'" +
            ", isActive='" + isIsActive() + "'" +
            "}";
    }
}
