package com.luxonis.backend.dto;

import com.luxonis.backend.model.Apartment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {
    private int pageCount;
    private long resultCount;
    private List<Apartment> results;
}
