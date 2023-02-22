import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Box, Grid, TablePagination} from "@mui/material";
import Navbar from "./components/Navbar";
import {ApartmentDto} from "./types/ApartmentDto";
import {RequestDto} from "./types/RequestDto";
import ApartmentCard from "./components/ApartmentCard";

const API_URL = 'http://localhost:5000/apartments/getAll'
function App() {

    const [apartments, setApartments] = useState<ApartmentDto[]>([]);

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(12);
    const [count, setCount] = useState<number>(0);

    const loadApartments = () => {
        let requestDto: RequestDto = {
            pageNumber: pageNumber,
            pageSize: pageSize
        };

        axios.post(API_URL, requestDto)
            .then((res: any) => {
                setApartments(res.data.results);
                setCount(res.data.resultCount);
            })
            .catch((error) => console.log(error));

    };

    useEffect(() => {
        loadApartments();
    }, [pageNumber, pageSize])

    const handlePageChange = (event: any, newPageNumber: number) => {
        setPageNumber(newPageNumber);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleSizeChange = (event: any) => {
        setPageSize(parseInt(event.target.value, 10));
        setPageNumber(0)
    };

    return (
    <Box>
      <Navbar />
        <Grid
            container
            spacing={4}
            sx={{
                p: 4,
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {apartments.map((apartment: ApartmentDto) => (
                <ApartmentCard apartmentData={apartment} key={apartment.id}/>
            ))}

        </Grid>

        <TablePagination
            component='div'
            count={count}
            page={pageNumber}
            onPageChange={handlePageChange}
            rowsPerPage={pageSize}
            rowsPerPageOptions={[12, 48, 100]}
            onRowsPerPageChange={handleSizeChange}

            sx={{
                my: 4,
                display: 'flex',
                justifyContent: 'center'
            }}
        />

    </Box>
  )
}

export default App
