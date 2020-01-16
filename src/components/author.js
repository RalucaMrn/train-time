import React from 'react'
import Rating from './../components/rating'
import languageGlobe from './../assets/png/language-globe.png'
import userImg from './../assets/png/bike-rider.png'
import Grid from '@material-ui/core/Grid'

export default function Author(props){
  const author = props.author;

  return <div className="author-box">
    <div class="first-div">
      <img src={userImg} border="1px" />
      <span>{author.name}</span>
    </div>

    <div className="second-div">
      <div>
        <img src={languageGlobe} className="languageGlobe" />
        {author.languages}
      </div>
      <div className="third-div">

        <div className="rating-author"><Rating score={author.score} max="5" /></div>
        <div className="rating-reviews">{author.reviewsNumber} reviews</div>

      </div>
    </div>
  </div>
}
