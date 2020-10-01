package com.restaurant_proj.backend.controller;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant_proj.backend.model.User;
import com.restaurant_proj.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/v2/")
public class UserController {
	
	@Autowired
    private UserRepository userRepository;
	
	//GET Users
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	//GET User by Id
	@GetMapping("/users/{id}")
	public Optional<User> getUserById(@PathVariable(value = "id") int userId) {
		Optional<User> user = userRepository.findById(userId);
		return user;
	}


}
