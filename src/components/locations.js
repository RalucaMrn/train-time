import React from 'react'
import Grid from '@material-ui/core/Grid'
import startIcon from './../assets/png/location-start.png'
import endIcon from './../assets/png/location-end.png'
import maxPart from './../assets/png/max-part.png'
import joinedPart from './../assets/png/joined-part.png'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { borders } from '@material-ui/system'
import Box from '@material-ui/core/Box'


export default class Locations extends React.Component {
  render() {
    const locations = this.props.locations
    const divStyle = {
      backgroundColor: grey[50],
      borderColor: blueGrey[200],

    };
    

    return <Box border={1} border={1} style={divStyle}>
        <h4>Location</h4>
        <Grid container >
          <Grid item xs={5}>
            <img src={startIcon}/>{locations.start.place}
            <br />
            <img src={endIcon} />{locations.end.place}
          </Grid>
          <Grid item xs={7}>
            {locations.start.date}
            <br />
            {locations.end.date}
          </Grid>
        </Grid>
        
        <Grid container>
          <Grid item xs={5}>
            <h4>Level of difficulty</h4>
            {locations.levelOfDifficulty}
          </Grid>
          <Grid item xs={7}>
            <h4>Duration</h4>
            {locations.duration}
          </Grid>
        </Grid>
        <Grid>
          <h4>Participants</h4>
          <img src={maxPart} />{locations.participants.maximum} 
          <img src={joinedPart} />{locations.participants.joined}
        </Grid>
      </Box>
  }
}