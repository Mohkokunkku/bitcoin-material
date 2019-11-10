import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CryptoCard(name) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            BITCOIN
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bitcoin on suurin ja käytetyin kryptovaluutta.
             Bitcoin julkaistiin vuonna 2009 ja ensimmäisen kryptovaluutan keksijänä on mystinen Satoshi, jonka henkilöllisyyttä ei tunneta.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Osta
        </Button>
        <Button size="small" color="primary">
          Myy
        </Button>
      </CardActions>
    </Card>
  );
}