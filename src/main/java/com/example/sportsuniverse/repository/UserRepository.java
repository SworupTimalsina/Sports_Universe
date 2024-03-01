package com.example.sportsuniverse.repository;

import com.example.sportsuniverse.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
//
    Optional<User> findByEmail(String email);

}