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

import com.priyanka.exceptions.NoSuchStudentException;
import com.priyanka.model.Department;
import com.priyanka.model.Student;
import com.priyanka.service.DepartmentService;
import com.priyanka.service.StudentService;

//http://machine-name:port-number/context-path/path-class/path-method

@RestController
@CrossOrigin
@RequestMapping(path = "students")
public class StudentController {
	@Autowired
	private StudentService service;
//	@Autowired
//	private DepartmentService departmentService;

	// http://localhost:8088/student_app/students/ - Post
	@PostMapping(path = "/")
	public ResponseEntity<String> saveStudent(@RequestBody Student student) {
		ResponseEntity<String> response = null;
		boolean result = service.addStudent(student);
		if (result)
			response = new ResponseEntity<String>("Student with id " + student.getStudentId() + " is added.",
					HttpStatus.CREATED);
		return response;
	}

	// http://localhost:8088/student_app/students/ - Put
	@PutMapping(path = "{sid}")
	public ResponseEntity<String> udpateStudent(@PathVariable("sid") int sid,@RequestBody Student student) {
		ResponseEntity<String> response = null;
		if(student.getStudentId()==sid) {
			boolean result = service.updateStudent(student);
			if (result)
				response = new ResponseEntity<String>("Student with id " + student.getStudentId() + " is updated.",
						HttpStatus.CREATED);
			return response;	
		}
		else {
			return null;
		}
		
	}

	// http://localhost:8088/student_app/students/searchById/1
	@GetMapping(path = "{studentId}")
	public ResponseEntity<Student> getStudentById(@PathVariable("studentId") int studentId)
			throws NoSuchStudentException {
		ResponseEntity<Student> response = null;
		Student student = service.findStudentById(studentId);
		response = new ResponseEntity<Student>(student, HttpStatus.OK);
		return response;
	}

	// http://localhost:8088/student_app/students/ - Get
	@GetMapping(path = "/")
	public ResponseEntity<List<Student>> getAllStudents() {
		ResponseEntity<List<Student>> response = null;
		List<Student> list = service.findAllStudents();
		response = new ResponseEntity<List<Student>>(list, HttpStatus.OK);
		return response;
	}

	// http://localhost:8088/student_app/students/searchByScore/70/90 - Get
	@GetMapping(path = "searchByScore/{min}/{max}")
	public ResponseEntity<List<Student>> getAllStudentByScore(@PathVariable("min") double min,
			@PathVariable("max") double max) {
		ResponseEntity<List<Student>> response = null;
		List<Student> list = service.findAllStudentsByScore(min, max);
		response = new ResponseEntity<List<Student>>(list, HttpStatus.OK);
		return response;
	}

	// http://localhost:8088/student_app/students/searchByName/Riya Mehta - Get
	@GetMapping(path = "searchByName/{studentName}")
	public ResponseEntity<List<Student>> getAllStudentByName(@PathVariable("studentName") String studentName) {
		ResponseEntity<List<Student>> response = null;
		List<Student> list = service.findAllStudentsByName(studentName);
		response = new ResponseEntity<List<Student>>(list, HttpStatus.OK);
		return response;
	}

	// http://localhost:8088/student_app/students/deleteById/1
	@DeleteMapping(path = "{studentId}")
	public ResponseEntity<String> deleteStudentById(@PathVariable("studentId") int studentId)
			throws NoSuchStudentException {
		ResponseEntity<String> response = null;
		boolean result = service.removeStudentById(studentId);
		if (result)
			response = new ResponseEntity<String>("Student with id = " + studentId + " is deleted.", HttpStatus.OK);
		return response;
	}
	
//	// http://localhost:8088/student_app/students/findAllDepartments
//	@GetMapping(path="findAllDepartments")
//	public List<Department> findAllDepartments(){
//		return departmentService.getAllDepartments();
//	}

	
}
