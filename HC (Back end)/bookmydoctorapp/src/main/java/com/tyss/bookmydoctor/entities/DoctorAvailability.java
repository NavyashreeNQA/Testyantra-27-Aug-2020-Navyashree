package com.tyss.bookmydoctor.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import java.util.Date;
@Data
@Entity
@Table(name="doc_aval")
public class DoctorAvailability {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "avail_id")
	private int availId;
	
	@Column(name="doc_id")
	private int doctorId;

	@Column(name = "avail_days")
	private int availabilityDays;
	
	@Column(name="ts_from")
	private Date timeslotFrom;
	
	@Column(name="ts_to")
	private Date timeslotTo;

	

//	@ManyToMany(cascade = CascadeType.ALL)
//	private List<Patient> patients;
//
////	@ManyToMany
////	private Patient patient;
//
//	@ManyToMany(cascade = CascadeType.ALL)
//	private List<Doctor> doctors;
//
//	@ManyToOne
//	@JoinColumn
//	private Doctor doctor;

}