package com.example.coach.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.coach.entity.User;
import com.example.coach.entity.UserDTO;
import com.example.coach.entity.UserRegistarionDTO;
import com.example.coach.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	UserService s;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<UserDTO> getAllUsers() {
		return s.getAllusers();
	}
	
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
	
	public UserDTO getUserById(@PathVariable("id") Long id) {
	return s.getUser(id);
	 }
	
	@RequestMapping(method = RequestMethod.POST)
	public  UserDTO createUser(@RequestBody UserDTO userDTO) {
	return s.saveUser(userDTO);
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") Long id)
	{
	s.deleteUserById(id);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.PUT)
	public UserDTO updateUser(@PathVariable Long id,@RequestBody UserDTO userDTO) {
		userDTO.setId(id);
	return s.updateUser(userDTO);
	}
	@RequestMapping(value="/prodscat/{idCategorie}",method = RequestMethod.GET)
	public List<User> getProduitsByCatId(@PathVariable("idCategorie") Long idCategorie) {
	return s.findByCategorieIdCategorie(idCategorie);
	}
	
	
	
	
	
	
	@PostMapping("/register") // New endpoint for registration
    public UserDTO registerUser(@RequestBody UserRegistarionDTO registrationDTO) {
        UserDTO userDTO = UserDTO.builder()
                .username(registrationDTO.getUsername())
                .password(registrationDTO.getPassword()) // Pass the password; it will be encoded in the service
                .email(registrationDTO.getEmail())
                .nbTel(registrationDTO.getNbTel())
                .role("USER")
                .age(registrationDTO.getAge())

                .status(false)
                .build();
        return s.saveUser(userDTO);
    }
	
	
	
	@PostMapping("/login") // New endpoint for registration
    public User loginUser(@RequestBody UserDTO loginDTO) {
		List<User>listesutils=s.findByUsername(loginDTO.getUsername());
		User userbypwd = null;
		
		int index = 0;
		int p=0;
		if (!listesutils.isEmpty()) {
	         // Initialize an index variable
	        while (index < listesutils.size()) {
	        	
	        	User userbypwd0 = listesutils.get(index);
	            if(passwordEncoder.matches(loginDTO.getPassword(),userbypwd0.getPassword())) {
	            	return userbypwd=userbypwd0;
	            	}
	            
	            
	            	else {
	      	          index++;}
	              	 
           
	        }   
	
	        }
		else {System.out.println("user not found");}
		return userbypwd;
		    
    }
	
	
	
	
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	 

}

