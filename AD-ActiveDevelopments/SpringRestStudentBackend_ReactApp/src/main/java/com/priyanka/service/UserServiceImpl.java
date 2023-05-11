package com.priyanka.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.priyanka.model.User;
import com.priyanka.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository repository;
	
	public boolean loginUser(User user) {
		boolean result = false;
		User user2 = repository.validateUser(user.getUsername(), user.getPassword());
		if(user2 != null) {
			result = true;
		}
		return result;
	}
	public User registration(User user) {
		return repository.save(user);
	}
}
