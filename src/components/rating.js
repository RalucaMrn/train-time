import React from 'react'
import Star from './../components/star'

export default function Rating(props) {
  let createStars = (max, score) => {
    const stars = []
    for (var i = 0; i < max; i++) {
      const state = i < score ? "on" : "off"
      stars.push(<Star key={i} state={state} />)
    }
    return stars
  }

  const score = props.score
  const max = props.max

  return (
    <div>
      {createStars(max, score)}
    </div>
  );
  
}

