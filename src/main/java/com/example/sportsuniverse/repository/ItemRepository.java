package com.example.sportsuniverse.repository;

import com.example.sportsuniverse.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    Optional<Item> findByProductName(String productName);
}