package com.priyanka.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.priyanka.model.Department;
import com.priyanka.repository.DepartmentRepository;

@Service
public class DepartmentServiceImpl implements DepartmentService{
	@Autowired
	private DepartmentRepository repository;
	@Override
	public List<Department> getAllDepartments() {
		return repository.findAll();
	}
}
