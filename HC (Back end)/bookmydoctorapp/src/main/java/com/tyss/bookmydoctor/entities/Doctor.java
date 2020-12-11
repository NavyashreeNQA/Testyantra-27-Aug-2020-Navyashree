package com.tyss.bookmydoctor.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;



@Entity
@Data
@Table(name="doctor_info")
public class Doctor  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doc_id")
	@JsonProperty
	private int doctorId;
	
	//@NotNull(message="Doctor name cannot be null")
	//@Pattern(regexp="[^0-9}*",message="Enter only alphabets")
	@Column(name="doc_nm")
//	@JsonProperty
	private String doctorName;
	
	@Column(name="doc_qual")
//	@JsonProperty
	private String qualification;

	
	@Column(name="doc_splz")
//	@JsonProperty
	private String specialisation;

	@Column(name="pra_from")
//	@JsonProperty
	private Date practicingFrom;
	
		
//	@Column(name="ratings")
////	@JsonProperty
//	private int ratings;
//	
//	@OneToMany(cascade = CascadeType.ALL)
////	@JsonProperty
//	private List<Appointment> orders;
	
}
