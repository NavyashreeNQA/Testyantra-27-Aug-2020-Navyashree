package com.tyss.bookmydoctor.dao;

import java.util.List;

import com.tyss.bookmydoctor.entities.Appointment;
import com.tyss.bookmydoctor.entities.DoctorAvailability;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.Patient;
import com.tyss.bookmydoctor.entities.RatingDetails;

public interface PatientDAO {
	
	
	public Patient addPatient(Patient patient);
	
	public Patient updatePatient(Patient updatePatient);
	
	public Patient removePatient(int id);
	
	public DoctorAvailability bookAppointment(DoctorAvailability availability);
	
	public Appointment updateAppoitment(Appointment updateAppointment);
	
	public List<Doctor> viewAllDoctor();
	
	public RatingDetails giveRatings(RatingDetails rating);
	
	
}
