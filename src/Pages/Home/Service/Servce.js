import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';







const Servce = (props) => {

    const { name, description, img } = props.service;
    return (


        <Grid item xs={4} sm={4} md={4} >
            <Box >
                <Card sx={{ minWidth: 275 , border:0, boxShadow:0 }} ><React.Fragment>
                    <CardContent>
                        <CardMedia
                            component="img"
                            style={{width:'auto' ,height:'80px' ,margin:'0 auto '}}
                            image={img}
                            alt="green iguana"
                        />
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} >
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    
                </React.Fragment></Card>
            </Box>
        </Grid>

    );
};

export default Servce;