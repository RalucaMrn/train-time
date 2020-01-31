import React from 'react'
import Rating from './../components/rating'
import languageGlobe from './../assets/png/language-globe.png'
import userImg from './../assets/png/bike-rider.png'


export default function Author(props){
  const author = props.author;

  return <div className="author-box">
    <div className="first-div">
      <img src={userImg} alt=""/>
      <span>{author.name}</span>
    </div>

    <div className="second-div">
      <div>
        <img src={languageGlobe} className="languageGlobe" alt=""/>
        {author.languages}
      </div>
      <div className="third-div">

        <div className="rating-author"><Rating score={author.score} max="5" /></div>
        <div className="rating-reviews">{author.reviewsNumber} reviews</div>

      </div>
    </div>
  </div>
}
