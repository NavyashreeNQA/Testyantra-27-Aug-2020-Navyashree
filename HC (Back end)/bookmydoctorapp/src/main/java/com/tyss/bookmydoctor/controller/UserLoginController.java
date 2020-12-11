package com.tyss.bookmydoctor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.bookmydoctor.dto.ResponseDTO;
import com.tyss.bookmydoctor.entities.User;
import com.tyss.bookmydoctor.service.UserService;
@RequestMapping("/user")
@RestController
public class UserLoginController {

	@Autowired
	private UserService service;

	@PostMapping("/signup")
	public ResponseDTO userRegister(@RequestBody User user) {
		ResponseDTO response=new ResponseDTO();
		response.setData(service.registerUser(user));
		return response;
	}

	
	@PostMapping("/login")
	public ResponseDTO getLogin(@RequestParam(name = "email") String email,
		@RequestParam(name = "password") String password)
	{
		ResponseDTO response=new ResponseDTO();
		response.setData(service.authenticateUser(email, password));
		return response;
	}

}






