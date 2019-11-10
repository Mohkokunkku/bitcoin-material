import React from "react";
import {Typography, Container, Grid, Paper} from "@material-ui/core";
import CryptoCard from "./card";

const Cards = () => {
    return ( 
        <Container>
            <Grid container spacing={3}>

        <Grid item xs={12}>    
        <Typography variant="h1">
        KRYPTOVALUUTAT
    </Typography>
    </Grid>
    <Grid item xs={5}>
    <CryptoCard name="Bitcoin" />
    </Grid>
    </Grid>
    </Container>
     );
}
 
export default Cards;

