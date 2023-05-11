package com.priyanka.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.priyanka.exceptions.NoSuchEmployeeException;
import com.priyanka.model.Employee;
import com.priyanka.repository.EmployeeRepository;
@Service("service")
//@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired
	private EmployeeRepository repository;
	
	@Override
	@Transactional
	public boolean addEmployee(Employee employee) {
		boolean result = false;
		employee = repository.save(employee);
		if(employee.getEmployeeId() > 0)
			result = true;
		return result;
	}

	@Override
	public Employee findEmployeeById(int employeeId) throws NoSuchEmployeeException  {
		if(repository.existsById(employeeId)) {
			return repository.findById(employeeId).get();
		}
		throw new NoSuchEmployeeException("Employee with id "+employeeId+" not found.");
	}

	@Override
	public List<Employee> findAllEmployees() {
		return repository.findAll();
	}

	

	

	@Override
	public Employee removeEmployeeById(int employeeId) throws NoSuchEmployeeException {
		Employee e;
		e = repository.findById(employeeId).get();
		if(repository.existsById(employeeId))
		{
			repository.deleteById(employeeId);
			return e;
		}
		throw new NoSuchEmployeeException("Employee with id "+employeeId+" not found.");
	}

	@Override
	@Transactional
	public boolean updateEmployee(Employee employee) {
		//repository.updateEmployee(Employee.getEmployeeName(), Employee.getEmployeeScore(), Employee.getEmployeeId(), Employee.getHomeAddress().getCity(),Employee.getHomeAddress().getPincode());
		repository.save(employee);
		return true;
	}
	
}
