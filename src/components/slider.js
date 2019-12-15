import React from 'react';
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
