import React from 'react';
import FacebookButton from './../components/facebook-button.js'
import TwitterButton from './../components/twitter-button.js'
import RedditButton from './../components/reddit-button.js'


export default function SocialMedia() {
  const styles = {
    float: 'right'
  }

  return <div style={styles}>
    <FacebookButton />
    <TwitterButton />
    <RedditButton />
  </div>
}