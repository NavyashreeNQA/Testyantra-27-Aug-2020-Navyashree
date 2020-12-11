package com.tyss.bookmydoctor.dao;

import java.util.Date;
import java.util.List;

import com.tyss.bookmydoctor.entities.Appointment;
import com.tyss.bookmydoctor.entities.DoctorAvailability;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.DueDays;
import com.tyss.bookmydoctor.entities.RatingDetails;


public interface DoctorDAO {

	public Doctor addDoctor(Doctor doctor);

	public Doctor updateDoctor(Doctor doctor);

	public Doctor removeDoctor(int doctorId);

	public List<RatingDetails> getAllRating();

	public List<Appointment> getAllScheduledAppointment();

	public DoctorAvailability addAvailbility(DoctorAvailability avaible);

	public Appointment updateAppointment(Appointment avaibility);

	public List<DueDays> updateTimeslot(Date dueDaysFrom, Date dueDaysTo);

}
