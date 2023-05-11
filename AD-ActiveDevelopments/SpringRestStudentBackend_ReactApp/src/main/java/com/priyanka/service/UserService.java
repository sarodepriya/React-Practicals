package com.priyanka.service;

import com.priyanka.model.User;

public interface UserService {
	public boolean loginUser(User user);
	public User registration(User user);
}
