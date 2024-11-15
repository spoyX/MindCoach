package com.example.demo;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class User implements Serializable{
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String nom;
	    private String prenom ;
	    private String email;
	    private double phone;
	    private Date DateDeNaissance;
	    private String specialiter;
	    private String password;
	
	
		public User(Long id, String nom, String prenom, String email, double phone, Date dateDeNaissance,
			String specialiter, String password) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.phone = phone;
		DateDeNaissance = dateDeNaissance;
		this.specialiter = specialiter;
		this.password = password;
	}
		
	    public Long getId() {
		return id;
		
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getPhone() {
		return phone;
	}
	public void setPhone(double phone) {
		this.phone = phone;
	}
	public Date getDateDeNaissance() {
		return DateDeNaissance;
	}
	public void setDateDeNaissance(Date dateDeNaissance) {
		DateDeNaissance = dateDeNaissance;
	}
	public String getSpecialiter() {
		return specialiter;
	}
	public void setSpecialiter(String specialiter) {
		this.specialiter = specialiter;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
