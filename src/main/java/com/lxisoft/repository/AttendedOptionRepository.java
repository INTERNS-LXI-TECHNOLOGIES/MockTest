package com.lxisoft.repository;

import com.lxisoft.domain.AttendedOption;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the AttendedOption entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AttendedOptionRepository extends JpaRepository<AttendedOption, Long> {
}
