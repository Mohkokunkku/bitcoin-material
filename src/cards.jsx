import React from "react";
import {Typography, Container, Grid, Paper} from "@material-ui/core";
import CryptoCard from "./card";

const Cards = () => {

    let info = CryptoInfo();
    return ( 
        <Container>
            <Grid container spacing={3}>

        <Grid item xs={12}>    
        <Typography variant="h1">
        KRYPTOVALUUTAT
    </Typography>
    </Grid>
        {info.map((coin) => <CryptoCard key={coin.id} name={coin.name} info={coin.info} id={coin.id} image={coin.image}/> )}

    </Grid>
    </Container>
     );
};
 


const CryptoInfo = () => {
    let info = [ {
        name: "Bitcoin",
        info: "Bitcoin on suurin ja käytetyin kryptovaluutta. Bitcoin julkaistiin vuonna 2009 ja ensimmäisen kryptovaluutan keksijänä on mystinen Satoshi, jonka henkilöllisyyttä ei tunneta.",
        id: 1, 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
},
{
    name: "Ethereum",
    info: "Ethereum on toisiksi tunnetuin kryptovaluutta. Ehtreum on tunnettu myös ICO-alustana muille pienemmille kryptovaluutoille. Ethereumin markkina-arvo oli vuonna 2016 lähes Bitcoinin tasolla.",
    id: 1027,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png"     
}];

return info;
}



export default Cards;

