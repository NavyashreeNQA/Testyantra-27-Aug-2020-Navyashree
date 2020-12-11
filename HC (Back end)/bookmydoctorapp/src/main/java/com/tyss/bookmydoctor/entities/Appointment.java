package com.tyss.bookmydoctor.entities;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;


@Entity
@Data
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="apt_id")
	private int appointmentId;
	
	@Column(name="doc_id")
	private int doctorId;
	
	@Column(name="doc_nm")
	private String doctorName;
	
	@Column(name="symptom")
	private String patientSymptoms;
	
	@Column(name="apt_sts")
	private String appointmentStatus; 
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "doctorName", referencedColumnName = "doctorName")
//	private Doctor doctor;
//	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "patientName", referencedColumnName = "patientName")
//	private Patient patient;


}
