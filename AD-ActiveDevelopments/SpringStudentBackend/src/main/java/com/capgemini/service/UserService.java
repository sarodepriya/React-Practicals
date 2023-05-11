package com.capgemini.service;

import com.capgemini.model.User;

public interface UserService {
	public boolean loginUser(User user);
	public User registration(User user);
}
