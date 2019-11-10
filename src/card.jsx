import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CryptoCard(name, info, id, img) {
  const classes = useStyles();
    console.log(name);
  return (
      <Grid item xs={6}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={name.image}
          title={name.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" gutterBottom>
            {name.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {name.info}
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
    </Grid>
  );
}