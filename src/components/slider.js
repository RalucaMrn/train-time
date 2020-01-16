import React from 'react';
import { Container } from '@material-ui/core';
import BigImg from './../assets/png/rectangle-879.png'
import SmallImg from './../assets/svg/Rectangle-880.svg'
import Grid from '@material-ui/core/Grid';

export default function Slider() {
  return (
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <img src={BigImg} />
          </Grid>
          <Grid item>
            <img src={SmallImg} />
            <img src={SmallImg} />
            <img src={SmallImg} />
          </Grid>
        </Grid>
      </Container>
    )
}
