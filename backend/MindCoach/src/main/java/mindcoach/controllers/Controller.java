package mindcoach.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mindcoach.User;
import mindcoach.Services.UserService;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/Users")
public class Controller {

	@Autowired
	UserService userservice;

	@GetMapping
	public List<User> getAllUsers() {
		return userservice.getAllUsers();
	}

	@PostMapping("/add")
	public User createUser(@RequestBody User utilisateur) {
		return userservice.addUser(utilisateur);
	}

	@DeleteMapping(path = "/{id}")
	public void DeleteUser(@PathVariable Long id) {
		userservice.DeleteUser(id);
	}

}
