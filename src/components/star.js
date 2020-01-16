import React, { useState } from 'react';
import StarGray from './../assets/svg/star-gray.svg'
import StarGold from './../assets/svg/star-gold.svg'



export default function Star(props) {
  let imageSource = StarGray

  if (props.state === "on") {
    imageSource = StarGold
  }
  
  return (
    <img src={imageSource} />
  );
}
