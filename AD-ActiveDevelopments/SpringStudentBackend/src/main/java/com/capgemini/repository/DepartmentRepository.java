package com.capgemini.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer>{

}
