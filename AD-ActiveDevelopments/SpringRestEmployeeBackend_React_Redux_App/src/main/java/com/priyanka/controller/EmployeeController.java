package com.priyanka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.priyanka.exceptions.NoSuchEmployeeException;
import com.priyanka.model.Department;
import com.priyanka.model.Employee;
import com.priyanka.service.DepartmentService;
import com.priyanka.service.EmployeeService;
import com.priyanka.service.EmployeeService;

//http://machine-name:port-number/context-path/path-class/path-method

@RestController
@CrossOrigin
@RequestMapping(path = "employees")
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	@Autowired
	private DepartmentService departmentService;

	// http://localhost:8085/Employee_app/employees/ 
	@PostMapping(path = "/")
	public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
		ResponseEntity<String> response = null;
		boolean result = service.addEmployee(employee);
		if (result)
			response = new ResponseEntity<String>("Employee with id " + employee.getEmployeeId() + " is added.",
					HttpStatus.CREATED);
		return response;
	}

	// http://localhost:8085/Employee_app/employees/ 
	@PutMapping(path = "{eid}")
	public ResponseEntity<String> udpateEmployee(@PathVariable("eid") int eid,@RequestBody Employee employee) {
		ResponseEntity<String> response = null;
		if(employee.getEmployeeId()==eid) {
			boolean result = service.updateEmployee(employee);
			if (result)
				response = new ResponseEntity<String>("Employee id = " + employee.getEmployeeId() + " his/her data is updated.",
						HttpStatus.CREATED);
			return response;	
		}
		else {
			return null;
		}
		
	}

	// http://localhost:8085/Employee_app/employees/1
	@GetMapping(path = "{employeeId}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("employeeId") int employeeId)
			throws NoSuchEmployeeException {
		ResponseEntity<Employee> response = null;
		Employee employee = service.findEmployeeById(employeeId);
		response = new ResponseEntity<Employee>(employee, HttpStatus.OK);
		return response;
	}

	// http://localhost:8085/Employee_app/employees/ - GetAllEmployees
	@GetMapping(path = "/")
	public ResponseEntity<List<Employee>> getAllEmployees() {
		ResponseEntity<List<Employee>> response = null;
		List<Employee> list = service.findAllEmployees();
		response = new ResponseEntity<List<Employee>>(list, HttpStatus.OK);
		return response;
	}

	// http://localhost:8085/Employee_app/employees/1
	@DeleteMapping(path = "{employeeId}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable("employeeId") int employeeId)
			throws NoSuchEmployeeException {
		ResponseEntity<String> response = null;
		boolean result = service.removeEmployeeById(employeeId);
		if (result)
			response = new ResponseEntity<String>("Employee with id = " + employeeId + " is deleted.", HttpStatus.OK);
		return response;
	}
	
	// http://localhost:8085/Employee_app/employees/getAllDepartments
	@GetMapping(path="getAllDepartments")
	public List<Department> findAllDepartments(){
		return departmentService.getAllDepartments();
	}

	
}
