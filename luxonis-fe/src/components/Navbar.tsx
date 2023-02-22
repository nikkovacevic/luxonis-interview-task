import React from 'react';
import {Box, Typography} from "@mui/material";

function Navbar() {
    return (
        <Box
            sx={{
                backgroundColor: '#004643',
                color: 'white',
                display: 'flex',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                },
                alignItems: 'center',
                py: 2,
                px: 8,
                height: '10vh'
            }}
        >
            <Typography
                sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    letterSpacing: '2px'
                }}
            >
                Luxonis Task
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block'}}}>
                Made with react
            </Box>
        </Box>
    );
}

export default Navbar;