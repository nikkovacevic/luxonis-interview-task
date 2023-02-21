package com.luxonis.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class RequestDto {
    private int pageNumber;
    private int pageSize;

}
