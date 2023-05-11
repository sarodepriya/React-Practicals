package com.priyanka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.priyanka.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
