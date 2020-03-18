package com.lxisoft.MockTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lxisoft.MockTest.model.QstnOption;


public interface OptionRepository extends JpaRepository<QstnOption, Long>{

}
