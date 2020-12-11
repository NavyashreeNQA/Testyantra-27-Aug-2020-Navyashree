package com.tyss.bookmydoctor.dto;
import java.io.Serializable;

import lombok.Data;



@SuppressWarnings("serial")
@Data
public class Admin implements Serializable{
	private String userName;
	private String password;

}
