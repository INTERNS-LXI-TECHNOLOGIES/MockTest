package com.lxisoft.repository;

import com.lxisoft.domain.Exam;


import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Exam entity.
 */
@Repository
public interface ExamRepository extends JpaRepository<Exam, Long> {


}
