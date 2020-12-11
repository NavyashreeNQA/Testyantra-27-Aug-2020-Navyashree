package com.tyss.bookmydoctor.dto;
import java.io.Serializable;

import lombok.Data;

@SuppressWarnings("serial")
@Data

public class DoctorAvailability implements Serializable{
	private int availId;
	private int doctorId;
	private int timeslotId;
	private String availabilityStatus;
	private String bookAppointment;
	
	
	
	
}