package com.lxisoft.MockTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lxisoft.MockTest.model.Exam;

public interface ExamRepo extends JpaRepository<Exam, Long> {

}
