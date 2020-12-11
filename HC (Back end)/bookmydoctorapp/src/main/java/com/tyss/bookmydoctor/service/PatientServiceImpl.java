package com.tyss.bookmydoctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.bookmydoctor.dao.PatientDAO;
import com.tyss.bookmydoctor.entities.*;
import com.tyss.bookmydoctor.exception.BookMyDoctorException;
@Service
public class PatientServiceImpl implements PatientService {
	@Autowired
	private PatientDAO patientDao;
	
	public Patient addPatient(Patient patient) {
		
		Patient addPatient = patientDao.addPatient(patient);
		if(addPatient!=null) {
			return addPatient;
		} else {
			throw new BookMyDoctorException("Unable to add patient");
		}
	}

	
	public Patient updatePatient(Patient patient) {
		
		Patient updatePatient = patientDao.updatePatient(patient);
		if(updatePatient!=null) {
			return updatePatient;
		} else {
			throw new BookMyDoctorException("Unable to update patient");
		}
	}

	
	public Patient deletePatient(int id) {
		
		Patient delPatient = patientDao.removePatient(id);
		if(delPatient!=null) {
			return delPatient;
		} else {
			throw new BookMyDoctorException("Invalid emailId");
		}
	}

	
	
	
	
	
	public RatingDetails giveRatings(RatingDetails rating) {
		
		RatingDetails ratingDetails = patientDao.giveRatings(rating);
		if(ratingDetails!=null) {
			return ratingDetails;
		} else {
			throw new BookMyDoctorException("Unable to provide ratings");
		}
	}


	public DoctorAvailability bookAppointment(DoctorAvailability availability) {
		DoctorAvailability bookAppointment = patientDao.bookAppointment(availability);
		if(bookAppointment!=null) {
			return bookAppointment;
		} else {
			throw new BookMyDoctorException("Unable to book an appointment");
		}
	}


	public List<Doctor> viewAllDoctors() {
		List<Doctor> getDoctors = patientDao.viewAllDoctor();
		 if(getDoctors!=null) {
				return getDoctors;
			} else {
				throw new BookMyDoctorException("Unable to fetch all doctors info");
			}
	}

}
