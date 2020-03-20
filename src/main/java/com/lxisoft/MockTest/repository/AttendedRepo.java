package com.lxisoft.MockTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lxisoft.MockTest.model.AttendedExam;

public interface AttendedRepo extends JpaRepository<AttendedExam, Long> {

}
