import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Servce from '../Service/Servce';

const services =[

    {
        name : "Flouride Treatment",
        description : "69-4 Use Material UI Card to display Single service data",
        img : fluoride 
    },
    {
        name : "Flouride Treatment",
        description : "69-4 Use Material UI Card to display Single service data",
        img : cavity 
    },
    {
        name : "Flouride Treatment",
        description : "69-4 Use Material UI Card to display Single service data",
        img : whitening
    }

]





const Services = () => {
    return (
        <div >
           
           

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                <Typography sx={{ mb: 1.5 , color:'#0288d1'}} variant ="h6" >
                         OUR SERVICES 
                         </Typography>
                <Typography sx={{ mb: 1.5, fontWeight:600  }} variant ="h4"  >
                         Services We Provide  
                         </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {
                        services.map(service =>
                        <Servce
                        key={services.name}
                       service={service}
                        ></Servce>
                            
                        )
                    }
                </Grid>
                </Container>
            </Box>

        </div>
    );
};

export default Services;