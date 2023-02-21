package com.luxonis.backend.repository;

import com.luxonis.backend.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApartmentRepository extends JpaRepository<Apartment, Long> {
}
