package com.tyss.bookmydoctor.dao;

import com.tyss.bookmydoctor.entities.User;

public interface UserDAO {

	
	public User registerUser(User user);
	public User authenticateUser(String email,String password);
	
}
