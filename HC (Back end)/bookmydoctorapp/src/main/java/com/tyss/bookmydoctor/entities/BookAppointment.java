package com.tyss.bookmydoctor.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="book_apt")
public class BookAppointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ba_id")
	private int bookAppointmentId;
	
	@Column(name="doc_id")
	private int doctorId;
	
	@Column(name="avail_id")
	private int availabilityId;
	
	@Column(name="book_apt")
	private String bookAppointment;
	

}
