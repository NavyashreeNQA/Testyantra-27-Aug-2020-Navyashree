package com.tyss.bookmydoctor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.bookmydoctor.dao.UserDAO;
import com.tyss.bookmydoctor.entities.User;
import com.tyss.bookmydoctor.exception.BookMyDoctorException;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDAO userDao;
	
	
	public User authenticateUser(String username, String password) {
		
		User user= userDao.authenticateUser(username, password);
		
		if(user!=null) {
			return user;
		} else {
			throw new BookMyDoctorException("Invalid credentials");
		}
	}

	
	
	public User registerUser(User user) {
		 User registerUser = userDao.registerUser(user);
		if(registerUser!=null) {
			return registerUser;
		} else {
			throw new BookMyDoctorException("Unable to register");
		}

	}

	
	

}
