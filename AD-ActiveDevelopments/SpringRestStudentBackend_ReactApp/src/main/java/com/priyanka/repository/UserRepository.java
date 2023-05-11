package com.priyanka.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.priyanka.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, String> {
	@Query(value="Select u From User u Where u.username = :username And u.password = :password")
	public User validateUser(@Param("username") String username, @Param("password") String password);
}
