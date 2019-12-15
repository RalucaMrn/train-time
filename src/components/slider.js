import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import BigImg from './../assets/png/rectangle-879.png'

export default class Slider extends React.Component {
  render () {

    return (
      <Container>
        <img src= {BigImg} />
      </Container>
    )
}
}
