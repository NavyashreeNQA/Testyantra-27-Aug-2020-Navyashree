package com.tyss.bookmydoctor.service;

import java.util.List;

import com.tyss.bookmydoctor.entities.*;

public interface PatientService {
	public Patient addPatient(Patient patient);

	public Patient updatePatient(Patient patient);
	
	public Patient deletePatient(int id);
	
	public List<Doctor> viewAllDoctors();
	
	public DoctorAvailability bookAppointment(DoctorAvailability availability);
	
	
	public RatingDetails giveRatings(RatingDetails rating);
	
	

}
