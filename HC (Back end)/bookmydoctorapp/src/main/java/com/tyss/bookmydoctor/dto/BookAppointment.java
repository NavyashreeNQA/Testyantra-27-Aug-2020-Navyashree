package com.tyss.bookmydoctor.dto;
import java.io.Serializable;

import lombok.Data;



@SuppressWarnings("serial")
@Data
public class BookAppointment implements Serializable {
	private int bookAppointmentId;
	private int doctorId;
	private int availabilityId;
	private String bookAppointment;
}
