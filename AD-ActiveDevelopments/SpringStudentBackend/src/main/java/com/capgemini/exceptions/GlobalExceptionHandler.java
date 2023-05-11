package com.capgemini.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {
	@ResponseBody
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = NoSuchStudentException.class)
	protected ExceptionInfo handleException(Exception ex, HttpServletRequest req) {
		String bodyMessage = ex.getMessage();
		String uri = req.getRequestURL().toString();
		return new ExceptionInfo(uri, bodyMessage);
	}
}
