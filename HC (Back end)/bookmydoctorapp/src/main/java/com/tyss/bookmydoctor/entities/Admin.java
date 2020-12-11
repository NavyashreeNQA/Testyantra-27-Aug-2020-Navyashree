package com.tyss.bookmydoctor.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Admin {
	@Id
	@Column(name="user_nm")
	private String userName;
	
	@Column(name="pwd")
	private String password;

}
