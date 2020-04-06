package com.lxisoft.repository;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.Exam;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the AttendedExam entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AttendedExamRepository extends JpaRepository<AttendedExam, Long> {

	List<AttendedExam> findAllByExam(Exam exam);
}
