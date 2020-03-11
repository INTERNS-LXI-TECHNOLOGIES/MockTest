package com.lxisoft.MockTest.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lxisoft.MockTest.model.Exam;

public interface ExamRepo extends JpaRepository<Exam, Long> {
	Optional<Exam> findById(Long id);
	Optional<Exam> findByIsActive(boolean isActive);
}
