package com.capgemini.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.model.User;
import com.capgemini.service.UserService;

@RestController
@RequestMapping(path="user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService service;
	
	// http://localhost:9090/student-api/user/login
	@PostMapping(path="login")
	public ResponseEntity<String> checkLogin(@RequestBody User user) {
		ResponseEntity<String> response = null;
		boolean result = service.loginUser(user);
		if(result) {
			response = new ResponseEntity<String>("Username and Password is correct", HttpStatus.OK);
		}else {
			response = new ResponseEntity<String>("Username and Password is incorrect", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}
	
	// http://localhost:9090/student-api/user/registration
	@PostMapping(path="registration")
	public User registration(@RequestBody User user) {
		return service.registration(user);
	}
}
