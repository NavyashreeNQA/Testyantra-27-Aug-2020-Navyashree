package com.tyss.bookmydoctor.service;
import java.util.Date;
import java.util.List;

import com.tyss.bookmydoctor.entities.Appointment;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.DueDays;
import com.tyss.bookmydoctor.entities.RatingDetails;


public interface DoctorService {
		public Doctor addDoctor(Doctor doctor);
		
		public Doctor updateDoctor(Doctor doctor);
		
		public Doctor removeDoctor(int doctorId);
		
		public List<RatingDetails> getAllRatings();
	    
	    public List<Appointment> getAllScheduledAppointment();
	    
	    public Appointment updateAvailability(Appointment availability); 
	    
	   	public List<DueDays> updateTimeslot(Date timeslotFrom,Date timeslotTo); 
}


