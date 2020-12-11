package com.tyss.bookmydoctor.service;

import com.tyss.bookmydoctor.entities.User;



public interface UserService {
	
	public User registerUser(User user);
	public User authenticateUser(String username,String password); 
}
