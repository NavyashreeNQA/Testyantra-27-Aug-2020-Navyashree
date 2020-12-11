package com.tyss.bookmydoctor.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.tyss.bookmydoctor.entities.User;

@Repository
public class UserDAOImpl implements UserDAO {

	@PersistenceUnit
	EntityManagerFactory factory;

	public User registerUser(User user) {
		EntityManager manager = factory.createEntityManager();
		manager.getTransaction().begin();
		manager.persist(user);
		manager.getTransaction().commit();
		manager.close();
		return user;
		
	}


	
	public User authenticateUser(String email, String password) {
		EntityManager manager = factory.createEntityManager();
		manager.getTransaction().begin();
		TypedQuery<User> query = manager.createQuery("FROM User U WHERE U.email= : mail AND U.password=:pwd",
				User.class);
		query.setParameter("mail", email);
		query.setParameter("pwd", password);
		User user = (User) query.getSingleResult();
		if (user != null) {
			manager.close();
			return user;
		} else {
			manager.close();
			return null;
		}

	}


}
