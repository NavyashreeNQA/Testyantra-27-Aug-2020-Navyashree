package com.tyss.bookmydoctor.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
@Entity
@Table(name="due_days")
public class DueDays {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doc_id")
	private int doctorId;
	
	@DateTimeFormat
	@Column(name="start")
	private Date start;
	
	@DateTimeFormat
	@Column(name="end")
	private Date end;
	
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "doctorId", referencedColumnName = "doctor_id")
//	private Doctor doctor;

}
