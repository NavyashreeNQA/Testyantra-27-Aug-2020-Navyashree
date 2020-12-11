package com.tyss.bookmydoctor.service;
import java.util.List;

import com.tyss.bookmydoctor.entities.Appointment;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.Patient;



public interface AdminService {
	public Doctor addDoctor(Doctor doctor);
	
	public Doctor removeDoctor(int id);
	
	public Patient removePatient(int id);
	
	public List<Appointment> viewAllAppointments();
	
	public Doctor updateDoctor(Doctor doctor);
	
	public Patient updatePatient(Patient patient);
	
	public List<Doctor> getAllDoctor();
	
	public List<Patient> getAllPatient();
	
	public Appointment removeAppointment(int appointmentId);

	public List<Appointment> viewAllAppointment(Appointment appointment);
	

	
}
