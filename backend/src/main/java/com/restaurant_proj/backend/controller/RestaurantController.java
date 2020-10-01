package com.restaurant_proj.backend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant_proj.backend.model.Restaurant;
import com.restaurant_proj.backend.repository.RestaurantRepository;

@RestController
@RequestMapping("/api/v1/")
public class RestaurantController {
	
	@Autowired
    private RestaurantRepository restaurantRepository;
	
	//GET Restaurants
	@GetMapping("/restaurants")
	public List<Restaurant> getAllUsers(){
		return restaurantRepository.findAll();
	}
	
	//GET Restaurant by Id
	@GetMapping("/restaurants/{id}")
	public Optional<Restaurant> getUserById(@PathVariable(value = "id") int restaurantId) {
		Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);
		return restaurant;
	}
	
	//
	
}
