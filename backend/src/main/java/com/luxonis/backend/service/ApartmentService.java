package com.luxonis.backend.service;

import com.luxonis.backend.model.Apartment;
import com.luxonis.backend.repository.ApartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ApartmentService {

    private final ApartmentRepository apartmentRepository;

    public Page<Apartment> getAll(int page, int size) throws Exception {
        try {
            return apartmentRepository.findAll(PageRequest.of(page-1, size));
        } catch (Exception e) {
            System.out.println("Error getting list of all apartments records");
            throw e;
        }
    }
}
