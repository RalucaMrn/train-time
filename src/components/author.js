import React from 'react'
import Rating from './../components/rating'
import languageGlobe from './../assets/png/language-globe.png'
import userImg from './../assets/png/bike-rider.png'

export default class Author extends React.Component {


  render() {
    const author = this.props.author

    return <div>
      <img src= {userImg} border="1px" />
      <h4>{author.name}</h4>
      <img src= {languageGlobe} />
      {author.languages}
      <Rating score={author.score} max="5" />
      {author.reviewsNumber} reviews
    </div>
  }
}