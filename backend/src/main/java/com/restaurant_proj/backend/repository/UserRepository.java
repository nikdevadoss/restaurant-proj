package com.restaurant_proj.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restaurant_proj.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
