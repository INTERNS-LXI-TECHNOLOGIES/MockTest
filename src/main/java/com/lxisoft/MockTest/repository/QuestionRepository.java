package com.lxisoft.MockTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lxisoft.MockTest.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

}
