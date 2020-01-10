import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';
import Star from './components/star'
import Rating from './components/rating'
import HeaderMenu from './components/header-menu'
import Slider from './components/slider'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AdditionalDocuments from './components/additional-documents'
import Author from './components/author'
import Locations from './components/locations'
import Box from '@material-ui/core/Box'
import IncludedItems from './components/included'
import Counter from './components/counter'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SocialMedia from './components/social-media'
import {borders} from '@material-ui/system';
import {sizing} from '@material-ui/system';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
  render() {
    const entry = {
      title: 'Hiking in the Tatras',
      author: {
        img: '',
        name: 'Douglas Gianini',
        languages: 'English, French, Portuguese',
        score: '4',
        reviewsNumber: '5'
      },
      images: [],

      locations: {
        start: {
          place: 'Prague, Czech Republic',
          date: 'Start at 10:00 on 10 May, 2019'
        },
        end: {
          place: 'Brno, Czech Republic',
          date: 'End at 14:00 on 10 May, 2019'
        },
        levelOfDifficulty: 'Moderate',
        duration: '4 hours',
        participants: {
          maximum: 'up to 10 people',
          joined: '10 people joined'
        }
      },

      includedItems: ["food", "drinks", "equipment"],

      additionalDocuments: [
        {
          name: 'Document1',
          type: 'pdf',
          url: 'http://google.com'
        },
        {
          name: 'Document2',
          type: 'txt',
          url: 'http://google.com'
        },
        {
          name: 'Document3',
          type: 'doc',
          url: 'http://google.com'
        }
      ]
    }

    return <div>
      <HeaderMenu />
      <Slider />
      <Container>
        <Grid container>
          <Grid item xs={12}>
          <h2>{entry.title}</h2>
          </Grid>
          <Grid item xs={8}>
            <Author author={entry.author}/>
            <Locations locations={entry.locations}/>
            <IncludedItems items={entry.includedItems}/>


            <div className="content">
              <h4>Included</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>

            <div className="content">
              <h4>Requirements</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
          </p>
            </div>

            <div className="content">
              <h4>Requirements</h4>
              <ul>
                <li>Condition</li>
                <li>Condition</li>
                <li>Condition</li>
                <li>Condition</li>
                <li>Condition</li>
              </ul>
            </div>

            <div className="content">
              <h4>Rules</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>

            <div className="content">
              <h4>Route description*</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="sidebar-left" marginLeft={4}>
              <Counter />
              <Button variant="contained" size="medium" color="primary">
                JOIN THIS EVENT
              </Button>
              <br />
              <Button color="secondary">
                <FavoriteBorderIcon></FavoriteBorderIcon>
                ADD TO WISHLIST
                </Button>

              <Box border={2} borderColor="secondary.main">
                <br />
                weather widget
              </Box>

              <Box>
                <br />
                Share with friends:<SocialMedia />
              </Box>

              <Box border={2} borderColor="secondary.main" height={600}>
                <br />
                placeholder text
              </Box>

              <Box border={1} borderColor="707070">
                <h4>Participants</h4>
                <Box m={4} borderBottom={2} borderColor="707070">
                  Name Surname
                  <br />
                  Location
                </Box>
                <Box m={4} borderBottom={2} borderColor="707070">
                  Name Surname
                  <br />
                  Location
                </Box>
                <Box m={4} borderBottom={2} borderColor="707070">
                  Name Surname
                  <br />
                  Location
                </Box>
                <Box m={4} borderBottom={2} borderColor="707070">
                  Name Surname
                  <br />
                  Location
                </Box>
                <Box m={4} borderBottom={2} borderColor="707070">
                  Name Surname
                  <br />
                  Location
                </Box>
              </Box>

            </div>
          </Grid>
        </Grid>

        <AdditionalDocuments documents={entry.additionalDocuments} />
        
        <div class = "waypoints">
          <Box fontSize={34}>List of waypoints - optional depending on event</Box>
          <Box border={2} borderColor="707070">
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4>Name of the first waypoint</h4>
                <h4>Location</h4>
                <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>
          <Box border={2} borderColor="707070">
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4>Name of the first waypoint</h4>
                <h4>Location</h4>
                <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>
          <Box border={2} borderColor="707070">
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4>Name of the first waypoint</h4>
                <h4>Location</h4>
                <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>
          <Box border={2} borderColor="707070">
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4>Name of the first waypoint</h4>
                <h4>Location</h4>
                <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>
        </div>


        <div className="reviews">

          <Box fontSize={34}>Reviews</Box>
          <h4>100 reviews</h4>
          
          <Box fontSize={14}>
            Route
            <Rating score={4} max={5}/>
          </Box>

          <Box fontSize={14}>
            Service
            <Rating score={4} max={5} />
          </Box>

          <Box fontSize={14}>
            Description quality
            <Rating score={4} max={5} />
          </Box>

          <Box fontSize={14}>
            Location
            <Rating score={4} max={5} />
          </Box>

          <Box fontSize={34}>Your review</Box>

          <Box fontSize={14}>
            Route
            <Rating score={4} max={5} />
          </Box>

          <Box fontSize={14}>
            Service
            <Rating score={4} max={5} />
          </Box>

          <Box fontSize={14}>
            Description quality
            <Rating score={4} max={5} />
          </Box>

          <Box fontSize={14}>
            Location
            <Rating score={4} max={5} />
          </Box>

          <Box>
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
          <Box>
            <Button variant="outlined">Publish</Button>
          </Box>
          
          



            <div className="others-reviews">
              <Grid container>
                <Grid item xs={2}>poza</Grid>
                <Grid item xs={3}>
                  <ul>
                    <li>Name Surname</li>
                    <li>Date</li>
                    <li>overall rating</li>
                    <li><Rating score={4} max={5} /></li>
                  </ul>
                </Grid>
                <Grid item xs={7}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                  </p>
                </Grid>
              </Grid>
              <div>
              
              
                <img />
                <p>Name Surname</p>
                <p>Date</p>
                <p>overall rating</p>
                <img src="steluta" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                  </p>
              </div>
              <div>
                <img />
                <p>Name Surname</p>
                <p>Date</p>
                <p>overall rating</p>
                <img src="steluta" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                </p>
              </div>
            </div>
          </div>
        

      </Container>
    </div>
  }
}

export default App;