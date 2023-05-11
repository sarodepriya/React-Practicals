package com.priyanka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.priyanka.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer>{

}
