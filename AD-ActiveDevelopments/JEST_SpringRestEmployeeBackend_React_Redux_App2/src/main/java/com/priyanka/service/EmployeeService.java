package com.priyanka.service;

import java.util.List;

import com.priyanka.exceptions.NoSuchEmployeeException;
import com.priyanka.model.Employee;


public interface EmployeeService {

	public boolean addEmployee(Employee employee);
	public Employee findEmployeeById(int employeeId)throws NoSuchEmployeeException;
	public List<Employee> findAllEmployees();
	public Employee removeEmployeeById(int employeeId)throws NoSuchEmployeeException;
	public boolean updateEmployee(Employee employee);

}
