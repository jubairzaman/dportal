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


        <Grid item xs={2} sm={4} md={4} >
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined"><React.Fragment>
                    <CardContent>
                        <CardMedia
                            component="img"
                            style={{width:'auto' ,height:'80px' ,margin:'0 auto '}}
                            image={img}
                            alt="green iguana"
                        />
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </React.Fragment></Card>
            </Box>
        </Grid>

    );
};

export default Servce;