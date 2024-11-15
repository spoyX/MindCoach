package com.example.demo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.accessibility.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Role {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long IdRole;
	    private String NomRole;
	    
	    
		public Long getIdRole() {
			return IdRole;
		}
		public void setIdRole(Long idRole) {
			IdRole = idRole;
		}
		public String getNomRole() {
			return NomRole;
		}
		public void setNomRole(String nomRole) {
			NomRole = nomRole;
		}

}
