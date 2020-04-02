package com.lxisoft.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A AttendedExam.
 */
@Entity
@Table(name = "attended_exam")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AttendedExam implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "score")
    private Integer score;

    @Column(name = "total")
    private Integer total;

    @Column(name = "result")
    private Boolean result;

    @Column(name = "percentage")
    private Float percentage;

    @Column(name = "date_time")
    private Instant dateTime;

    @OneToMany(mappedBy = "attendedExam")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Exam> exams = new HashSet<>();

    @OneToMany(mappedBy = "attendedExam")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<AttendedOptn> attendedOptns = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getScore() {
        return score;
    }

    public AttendedExam score(Integer score) {
        this.score = score;
        return this;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getTotal() {
        return total;
    }

    public AttendedExam total(Integer total) {
        this.total = total;
        return this;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Boolean isResult() {
        return result;
    }

    public AttendedExam result(Boolean result) {
        this.result = result;
        return this;
    }

    public void setResult(Boolean result) {
        this.result = result;
    }

    public Float getPercentage() {
        return percentage;
    }

    public AttendedExam percentage(Float percentage) {
        this.percentage = percentage;
        return this;
    }

    public void setPercentage(Float percentage) {
        this.percentage = percentage;
    }

    public Instant getDateTime() {
        return dateTime;
    }

    public AttendedExam dateTime(Instant dateTime) {
        this.dateTime = dateTime;
        return this;
    }

    public void setDateTime(Instant dateTime) {
        this.dateTime = dateTime;
    }

    public Set<Exam> getExams() {
        return exams;
    }

    public AttendedExam exams(Set<Exam> exams) {
        this.exams = exams;
        return this;
    }

    public AttendedExam addExam(Exam exam) {
        this.exams.add(exam);
        exam.setAttendedExam(this);
        return this;
    }

    public AttendedExam removeExam(Exam exam) {
        this.exams.remove(exam);
        exam.setAttendedExam(null);
        return this;
    }

    public void setExams(Set<Exam> exams) {
        this.exams = exams;
    }

    public Set<AttendedOptn> getAttendedOptns() {
        return attendedOptns;
    }

    public AttendedExam attendedOptns(Set<AttendedOptn> attendedOptns) {
        this.attendedOptns = attendedOptns;
        return this;
    }

    public AttendedExam addAttendedOptn(AttendedOptn attendedOptn) {
        this.attendedOptns.add(attendedOptn);
        attendedOptn.setAttendedExam(this);
        return this;
    }

    public AttendedExam removeAttendedOptn(AttendedOptn attendedOptn) {
        this.attendedOptns.remove(attendedOptn);
        attendedOptn.setAttendedExam(null);
        return this;
    }

    public void setAttendedOptns(Set<AttendedOptn> attendedOptns) {
        this.attendedOptns = attendedOptns;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AttendedExam)) {
            return false;
        }
        return id != null && id.equals(((AttendedExam) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "AttendedExam{" +
            "id=" + getId() +
            ", score=" + getScore() +
            ", total=" + getTotal() +
            ", result='" + isResult() + "'" +
            ", percentage=" + getPercentage() +
            ", dateTime='" + getDateTime() + "'" +
            "}";
    }
}
