package com.priyanka.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
@Entity
@Component
@Scope(scopeName="prototype")
@EntityScan
@Table(name="LOGIN_TBL")
public class User {
	@Id
	private String username;
	private String password;
	public User() {
		
	}
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
