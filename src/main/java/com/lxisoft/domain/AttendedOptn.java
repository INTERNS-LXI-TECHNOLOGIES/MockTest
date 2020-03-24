package com.lxisoft.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A AttendedOptn.
 */
@Entity
@Table(name = "attended_optn")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AttendedOptn implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(unique = true)
    private Question question;

    @ManyToOne
    @JsonIgnoreProperties("attendedOptns")
    private AttendedExam attendedExam;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public AttendedOptn question(Question question) {
        this.question = question;
        return this;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public AttendedExam getAttendedExam() {
        return attendedExam;
    }

    public AttendedOptn attendedExam(AttendedExam attendedExam) {
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
        if (!(o instanceof AttendedOptn)) {
            return false;
        }
        return id != null && id.equals(((AttendedOptn) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "AttendedOptn{" +
            "id=" + getId() +
            "}";
    }
}
