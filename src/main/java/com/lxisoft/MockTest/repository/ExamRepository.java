package com.lxisoft.MockTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lxisoft.MockTest.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {

}
