package com.lxisoft.repository;

import com.lxisoft.domain.AttendedOptn;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the AttendedOptn entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AttendedOptnRepository extends JpaRepository<AttendedOptn, Long> {
}
