package com.capgemini.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("student")
@Scope(scopeName="prototype")
@Entity
@Table(name="STUDENT_TBL")
public class Student implements Serializable{
	@Id
	@Column(name="STUDENT_ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int studentId;
	
	@Column(name="STUDENT_NAME", length=50, nullable=false)
	private String studentName;
	
	@Column(name="STUDENT_SCORE", nullable=false)
	private double studentScore;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="ADDRESS_ID")
	@Autowired
	private Address homeAddress;
	
	@ManyToOne
	@JoinColumn(name="DEPT_ID")
	private Department department;
	
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public void setHomeAddress(Address homeAddress) {
		this.homeAddress = homeAddress;
	}
	public Address getHomeAddress() {
		return homeAddress;
	}
	public Student() {
	}
	public Student(int studentId, String studentName, double studentScore) {
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentScore = studentScore;
	}
	public Student(Address address) {
		this.homeAddress = address;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public double getStudentScore() {
		return studentScore;
	}
	public void setStudentScore(double studentScore) {
		this.studentScore = studentScore;
	}
	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", studentName=" + studentName + ", studentScore=" + studentScore
				+ "]";
	}
}
