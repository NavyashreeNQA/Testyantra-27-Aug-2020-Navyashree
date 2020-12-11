package com.tyss.bookmydoctor.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.bookmydoctor.dto.ResponseDTO;

@RestController
public class ControllerAdvice {
	@ExceptionHandler
	public ResponseDTO handler(Exception e) {
		ResponseDTO response=new ResponseDTO();
		response.setError(true);
		response.setData(e.getMessage());
		return response;
	}
	
	

}
