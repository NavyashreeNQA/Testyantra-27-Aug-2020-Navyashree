package com.tyss.bookmydoctor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.bookmydoctor.dto.ResponseDTO;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.DoctorAvailability;
import com.tyss.bookmydoctor.entities.Patient;
import com.tyss.bookmydoctor.entities.RatingDetails;
import com.tyss.bookmydoctor.service.PatientService;
@RequestMapping("/patient-profile")
@RestController
public class PatientController {
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/patient")
	public ResponseDTO addPatient(@RequestBody Patient patient) {
		ResponseDTO response = new ResponseDTO();
		response.setData(patientService.addPatient(patient));
		return response;
	}
	
	
	@PutMapping("/update-patient/{id}")		
	public ResponseDTO updatePatient(@RequestBody Patient patient) {
		ResponseDTO response = new ResponseDTO();
		response.setData(patientService.updatePatient(patient));
		return response;
	}
	
	@DeleteMapping("/patient/{id}")
	public ResponseDTO deletePatient(@PathVariable int id) {
		ResponseDTO response = new ResponseDTO();
		response.setData(patientService.deletePatient(id));
		return response;
	}
	
	@GetMapping("/appointment")
	public ResponseDTO bookAppointment(DoctorAvailability availability) {
		ResponseDTO response = new ResponseDTO();
		response.setData(patientService.bookAppointment(availability));
		return response;
	}
	
	@PostMapping("/rating")
	
	public ResponseDTO giveRatings(RatingDetails rating) {
		ResponseDTO response = new ResponseDTO();
		response.setData(patientService.giveRatings(rating));
		return response;
	}
	
	@GetMapping("/doctors")
	public ResponseDTO viewAllDoctors(Doctor viewAllDoctor) {
	ResponseDTO response = new ResponseDTO();
	response.setData(patientService.viewAllDoctors());
	return response;
	}
	
	
}
