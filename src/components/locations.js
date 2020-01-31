import React from 'react'
import startIcon from './../assets/png/location-start.png'
import endIcon from './../assets/png/location-end.png'
import maxPart from './../assets/png/max-part.png'
import joinedPart from './../assets/png/joined-part.png'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey'
import Box from '@material-ui/core/Box'
import difficultyImg from './../assets/png/difficulty.png'

export default function Locations(props) {
  const locations = props.locations;
  const divStyle = {
    backgroundColor: grey[50],
    borderColor: blueGrey[200],
    paddingLeft: 22
  }

  return <Box border={1} style={divStyle} className="locations">
        <h4>Location</h4>
        <div>
          <div className="location-row">
            <div className="location-part">
              <img className="bottom-minus" src={startIcon} alt=""/>{locations.start.place}
            </div>
            <div>
              {locations.start.date}
            </div>
          </div>
          
            <div className="location-row">
              <div className="location-part">
                <img className="bottom-minus" src={endIcon} alt=""/>{locations.end.place}
              </div>
              <div className="location-part">
                {locations.end.date}
              </div>
            </div>
        </div>

        <div className="location-row">
          <div className="location-part">
            <h4>Level of difficulty</h4>
          </div>
          <div>
            <h4>Duration</h4>
          </div>
        </div>

        <div className="location-row">
          <div className="location-part">
            <img className="bottom-minus" src={difficultyImg} alt=""/> {locations.levelOfDifficulty}
          </div>
          <div>
            {locations.duration}
          </div>
        </div>
        <div>
        
      </div>
       
      <div>
        <h4>Participants</h4>
      </div>
      <div className="location-row">
        <div className="location-last">
          <img src={maxPart} alt=""/>{locations.participants.maximum}
        </div>
        <div className="location-last">
          <img src={joinedPart} alt=""/>{locations.participants.joined}
        </div>
      </div>
    </Box>
  }