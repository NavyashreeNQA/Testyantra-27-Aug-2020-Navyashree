package com.tyss.bookmydoctor.dto;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;




@SuppressWarnings("serial")
@Data
public class Doctor implements Serializable  {
	
	private int doctorId;
	private String doctorName;
	private String specialisation;
	private Date practicingFrom;
	private String qualification;
	private int ratings;	
}
