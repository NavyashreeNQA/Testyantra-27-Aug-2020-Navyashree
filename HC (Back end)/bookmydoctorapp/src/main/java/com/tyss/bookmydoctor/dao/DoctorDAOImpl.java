package com.tyss.bookmydoctor.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;

import com.tyss.bookmydoctor.entities.Appointment;
import com.tyss.bookmydoctor.entities.DoctorAvailability;
import com.tyss.bookmydoctor.entities.Doctor;
import com.tyss.bookmydoctor.entities.DueDays;
import com.tyss.bookmydoctor.entities.RatingDetails;
@Repository
public class DoctorDAOImpl implements DoctorDAO {

	@PersistenceUnit
	EntityManagerFactory factory;

		public Doctor addDoctor(Doctor doctor) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transcation = manager.getTransaction();
		transcation.begin();
		manager.persist(doctor);
		manager.getTransaction().commit();
		manager.close();
		return doctor;

	}

	
	
	public Doctor removeDoctor(int doctorId) {
		EntityManager manager = factory.createEntityManager();
		Doctor doctor = manager.find(Doctor.class, doctorId);
		EntityTransaction transcation = manager.getTransaction();
		transcation.begin();
		manager.remove(doctor);
		manager.getTransaction().commit();
		manager.close();
		return doctor;

	}

	
	public Appointment updateAppointment(Appointment avaibility) {
		EntityManager manager = factory.createEntityManager();
		Appointment doctorAvailable = manager.find(Appointment.class, avaibility.getAppointmentStatus());
		if (doctorAvailable != null) {
			BeanUtils.copyProperties(avaibility, doctorAvailable);
			manager.getTransaction().begin();
			manager.close();
			return doctorAvailable;
		} else {
			manager.close();
			return null;
		}
	}

	
	
	public DoctorAvailability addAvailbility(DoctorAvailability avaible) {

		EntityManager manager = factory.createEntityManager();
		EntityTransaction transcation = manager.getTransaction();
		transcation.begin();
		manager.persist(avaible);
		manager.getTransaction().commit();
		manager.close();
		return avaible;

	}

	
	public Doctor updateDoctor(Doctor doctor) {

		EntityManager manager = factory.createEntityManager();
		Doctor doctor1 = manager.find(Doctor.class, doctor.getDoctorId());

		if (doctor1 != null) {
			BeanUtils.copyProperties(doctor, doctor1);
			manager.getTransaction().begin();
			manager.close();
			return doctor1;
		} else {
			manager.close();
			return null;
		}
	}

	
	public List<DueDays> updateTimeslot(Date dueDaysFrom, Date dueDaysTo) {

		EntityManager manager = factory.createEntityManager();
		TypedQuery<DueDays> query = manager.createQuery(
				"UPDATE DoctorTimeslot set timeslotsFrom= :timeslotFrom, timeslotsTo= :timeslotTo where id= :doctorId", DueDays.class);
		return query.getResultList();

	}



	public List<RatingDetails> getAllRating() {
		EntityManager manager = factory.createEntityManager();
		TypedQuery<RatingDetails> query = manager.createQuery("FROM RatingDetails", RatingDetails.class);
		return query.getResultList();
		
	}



	public List<Appointment> getAllScheduledAppointment() {
		EntityManager manager = factory.createEntityManager();
		TypedQuery<Appointment> query = manager.createQuery("FROM Appointment", Appointment.class);
		return query.getResultList();
	}



	

}
