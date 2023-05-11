package com.priyanka.service;

import java.util.List;

import com.priyanka.exceptions.NoSuchStudentException;
import com.priyanka.model.Student;

public interface StudentService {
	public boolean addStudent(Student student);
	public Student findStudentById(int studentId)throws NoSuchStudentException;
	public List<Student> findAllStudents();
	public List<Student> findAllStudentsByName(String name);
	public List<Student> findAllStudentsByScore(double min, double max);
	public boolean removeStudentById(int studentId)throws NoSuchStudentException;
	public boolean updateStudent(Student student);
}
