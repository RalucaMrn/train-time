import React from 'react'
import Rating from './../components/rating'
import languageGlobe from './../assets/png/language-globe.png'
import userImg from './../assets/png/bike-rider.png'
import Grid from '@material-ui/core/Grid'


export default class Author extends React.Component {


  render() {
    const author = this.props.author

    return <div className="author-box">
      <Grid container>
        <Grid item xs={4}>
            <h4><img src={userImg} border="1px" /> {author.name}</h4>
        </Grid>
        <Grid item xs={8}>
          <img src={languageGlobe} />
          {author.languages}
          <Rating score={author.score} max="5" />
          {author.reviewsNumber} reviews
        </Grid>
      </Grid>
    </div>
  }
}