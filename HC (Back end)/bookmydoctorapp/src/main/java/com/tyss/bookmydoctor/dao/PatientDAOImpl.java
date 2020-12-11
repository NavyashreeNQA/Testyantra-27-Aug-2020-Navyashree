package com.tyss.bookmydoctor.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;

import com.tyss.bookmydoctor.entities.Appointment;
import com.tyss.bookmydoctor.entities.DoctorAvailability;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.Patient;
import com.tyss.bookmydoctor.entities.RatingDetails;

@Repository
public class PatientDAOImpl implements PatientDAO {

	@PersistenceUnit
	EntityManagerFactory factory;

	
	public Patient addPatient(Patient newPatient) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transcation = manager.getTransaction();
		transcation.begin();
		manager.persist(newPatient);
		manager.getTransaction().commit();
		manager.close();
		return newPatient;

	}

	
	public Patient updatePatient(Patient updatePatient) {

			EntityManager manager = factory.createEntityManager();
			manager.getTransaction().begin();
			Patient updatedPatient = manager.find(Patient.class, updatePatient.getPatientId());
			BeanUtils.copyProperties(updatePatient, updatePatient);
			manager.getTransaction().commit();
			manager.close();
			factory.close();
			return updatedPatient;
	}
	

	
	public Patient removePatient(int id) {
		EntityManager manager = factory.createEntityManager();
		Patient patient = manager.find(Patient.class, id);
		EntityTransaction transcation = manager.getTransaction();
		transcation.begin();
		manager.remove(patient);
		manager.getTransaction().commit();
		manager.close();
		return patient;

	}

	
	public Appointment bookAppointment(Appointment bookAppointment) {
		EntityManager manager = factory.createEntityManager();
		manager.getTransaction().begin();
		Appointment bookNewAppointment = new Appointment();
		BeanUtils.copyProperties(bookAppointment, bookNewAppointment);
		manager.persist(bookNewAppointment);
		return bookNewAppointment;
	}

	
	public Appointment updateAppoitment(Appointment updateAppointment) {
		EntityManager manager = factory.createEntityManager();
		manager.getTransaction().begin();
		Appointment updatedAppointment = manager.find(Appointment.class, updateAppointment.getAppointmentId());
		BeanUtils.copyProperties(updateAppointment, updatedAppointment);
		return updatedAppointment;

	}

	
	public List<Doctor> viewAllDoctor() {
		EntityManager manager = factory.createEntityManager();
		TypedQuery<Doctor> query = manager.createQuery("FROM Doctor", Doctor.class);
		return query.getResultList();
	}

		public RatingDetails giveRatings(RatingDetails rating) {

		EntityManager manager = factory.createEntityManager();
		RatingDetails newRating = new RatingDetails();
		BeanUtils.copyProperties(rating, newRating);
		manager.persist(newRating);
		return rating;
	}


		public DoctorAvailability bookAppointment(DoctorAvailability availability) {
			factory = Persistence.createEntityManagerFactory("db");
			EntityManager manager = factory.createEntityManager();
			manager.getTransaction().begin();
			DoctorAvailability bookNewAppointment = new DoctorAvailability();
			BeanUtils.copyProperties(availability, bookNewAppointment);
			manager.persist(bookNewAppointment);
			return bookNewAppointment;
}
}