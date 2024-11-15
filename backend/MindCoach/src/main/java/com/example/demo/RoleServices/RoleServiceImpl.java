package com.example.demo.RoleServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Role;

import com.example.demo.repositories.RoleRepository;


public class RoleServiceImpl implements RoleService{
	
	
	 @Autowired 
	 private RoleRepository RoleRepo; 

	@Override
	public List<Role> getAllRoles() {
		return RoleRepo.findAll();
	}

	@Override
	public Role findRoleById(Long id) {
		Optional<Role> role = RoleRepo.findById(id);
	    return role.orElse(null);
	}

	@Override
	public Role addRole(Role role) {
		return RoleRepo.save(role);
	}

	@Override
	public Role updateRole(Role role) {
		
		
		if (RoleRepo.existsById(role.getIdRole())) {
	         return RoleRepo.save(role);
	     }
	     return null;
	}

	@Override
	public void deleletRole(Long id) {

		Optional<Role> role = RoleRepo.findById(id);
	    if (role.isPresent()) {
	    	RoleRepo.deleteById(id);  
	         
	    }
		
	}

}
