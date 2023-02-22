package com.luxonis.backend.controller;


import com.luxonis.backend.dto.RequestDto;
import com.luxonis.backend.dto.ResponseDto;
import com.luxonis.backend.model.Apartment;
import com.luxonis.backend.service.ApartmentService;
import org.springframework.boot.web.server.WebServerException;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("/apartments")
public class ApartmentController {

    private final ApartmentService apartmentService;

    public ApartmentController(ApartmentService apartmentService) {this.apartmentService = apartmentService;}

    @PostMapping("/getAll")
    @ResponseBody
    public ResponseDto getAll(@RequestBody RequestDto requestDto) {
        try {
            Page<Apartment> all = apartmentService.getAll(
                    requestDto.getPageNumber(),
                    requestDto.getPageSize()
            );

            return new ResponseDto(
                    all.getTotalPages(),
                    all.getTotalElements(),
                    all.getContent().stream().collect(Collectors.toList())
            );
        } catch (Exception e) {
            throw new WebServerException(e.getMessage(), e);
        }
    }
}
