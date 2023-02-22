import {ApartmentDto} from "./ApartmentDto";

export interface ResponseDto {
    pageCount: number;
    resultCount: number;

    results: ApartmentDto[];

}