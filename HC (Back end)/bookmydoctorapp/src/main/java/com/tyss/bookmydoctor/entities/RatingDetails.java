package com.tyss.bookmydoctor.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="ratings")
public class RatingDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="rat_id")
	private int ratingId;
	
	@Column(name="doc_id")
	private int doctorId;

	@Column(name = "feed_back")
	private String feedback;

	@Column(name = "rating")
	private int ratings;
}