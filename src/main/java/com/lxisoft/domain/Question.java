package com.lxisoft.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

/**
 * A Question.
 */
@Entity
@Table(name = "question")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Question implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "level")
    private String level;

    @Column(name = "qstn")
    private String qstn;

    @OneToMany(mappedBy = "question")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Collection<QstnOption> qstnOptions;

    @OneToOne(mappedBy = "question")
    @JsonIgnore
    private AttendedOptn attendedOptn;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public Question level(String level) {
        this.level = level;
        return this;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getQstn() {
        return qstn;
    }

    public Question qstn(String qstn) {
        this.qstn = qstn;
        return this;
    }

    public void setQstn(String qstn) {
        this.qstn = qstn;
    }

   

    public Question qstnOptions(Set<QstnOption> qstnOptions) {
        this.qstnOptions = qstnOptions;
        return this;
    }

    public Question addQstnOption(QstnOption qstnOption) {
        this.qstnOptions.add(qstnOption);
        qstnOption.setQuestion(this);
        return this;
    }

    public Question removeQstnOption(QstnOption qstnOption) {
        this.qstnOptions.remove(qstnOption);
        qstnOption.setQuestion(null);
        return this;
    }

   
    public Collection<QstnOption> getQstnOptions() {
		return qstnOptions;
	}

	public void setQstnOptions(Collection<QstnOption> qstnOptions) {
		this.qstnOptions = qstnOptions;
	}

	public AttendedOptn getAttendedOptn() {
        return attendedOptn;
    }

    public Question attendedOptn(AttendedOptn attendedOptn) {
        this.attendedOptn = attendedOptn;
        return this;
    }

    public void setAttendedOptn(AttendedOptn attendedOptn) {
        this.attendedOptn = attendedOptn;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Question)) {
            return false;
        }
        return id != null && id.equals(((Question) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Question{" +
            "id=" + getId() +
            ", level='" + getLevel() + "'" +
            ", qstn='" + getQstn() + "'" +
            "}";
    }
}