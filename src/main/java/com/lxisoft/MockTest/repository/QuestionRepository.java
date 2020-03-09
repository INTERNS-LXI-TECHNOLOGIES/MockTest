package com.lxisoft.MockTest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lxisoft.MockTest.model.Question;
@Repository("QuestionRepository")
public interface QuestionRepository extends JpaRepository<Question, Long> {

	

}
