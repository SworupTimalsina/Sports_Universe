package com.example.sportsuniverse.service;

import com.example.sportsuniverse.dto.OrderDTO;
import com.example.sportsuniverse.dto.OrderHistoryDTO;
import com.example.sportsuniverse.entity.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> getAllOrders();
    List<OrderHistoryDTO> getOrderHistory();
}