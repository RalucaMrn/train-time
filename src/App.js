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
import photoReview from './assets/png/photo-review.png';

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
          name: 'Document',
          type: 'pdf',
          url: 'http://google.com'
        },
        {
          name: 'Document',
          type: 'pdf',
          url: 'http://google.com'
        }
      ]
    }

    return <div>
      <HeaderMenu />
      <Slider />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>{entry.title}</h2>
          </Grid>
          <Grid item xs={8}>
            <div className="row">
              <Author author={entry.author} />
            </div>
            
            <Locations locations={entry.locations}/>

            <div style={{ border: "1px solid rgba(112, 112, 112, 0.18)", background:"rgba(255, 255, 255, 0.87)", marginTop: "22px"}}>
              <IncludedItems items={entry.includedItems} />
            </div>
            


            <div className="content">
              <h4 style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.87)"}}>About event</h4>
              <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", textAlign: "justify"}}>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>

            <div className="content">
              <h4 style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.87)" }}>Requirements</h4>
              <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", textAlign: "justify" }}>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>


            <div className="content">
              <h4 style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.87)" }}>Requirements</h4>
              <ul>
                <li style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.87)"}}>Condition</li>
                <li style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.87)" }}>Condition</li>
                <li style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.87)" }}>Condition</li>
                <li style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.87)" }}>Condition</li>
                <li style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.87)" }}>Condition</li>
              </ul>
            </div>

            <div className="content">
              <h4 style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.87)" }}>Rules</h4>
              <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", textAlign: "justify" }}>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>

            <div className="content">
              <h4 style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.87)" }}>Route description</h4>
              <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", textAlign: "justify" }}>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebar-left" marginLeftt={4}>
              <Counter />
              
              <div style={{ textAlign: "center" }} >
                <Button class="joinEvent" variant="contained" size="medium">
                  JOIN THIS EVENT
                </Button>
              </div>
              
              <div style={{ textAlign: "center" }} >
                <Button color="secondary">
                  <FavoriteBorderIcon ></FavoriteBorderIcon>
                  ADD TO WISHLIST
                </Button>
              </div>
              

              <Box style={{ height: "144px", marginBottom: "44px", textAlign: "center"}} border={2} borderColor="grey.500">
                <span>Weather Widget</span>
              </Box>

              <div style={{ display: "flex", marginBottom: "43px", justifyContent: "center", alignItems: "center"}}>
                <span style={{marginRight:"13px"}}>Share with friends:</span>
                <SocialMedia />
              </div>

              <Box style={{ height: "600px", backgroundColor: "rgba(112, 112, 112, 0.18)", border: "border: 1px solid rgba(112, 112, 112, 0.18)", marginBottom:"32px"}}>
              </Box>

              <Box style={{ border:"1px solid rgba(112, 112, 112, 0.18)"}}>
                <h4 style={{ marginLeft: "20px", fontSize: "24px", color: "rgba(0, 0, 0, 0.87)"}}>Participants</h4>
                <Box m={4} style={{borderBottom:"1px solid rgba(112, 112, 112, 0.18)"}}>
                  <span style={{fontSize: "16px", paddingBottom:"5px"}}>Name Surname</span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px", marginBottom:"15px" }}>Location</span>
                </Box>

                <Box m={4} style={{ borderBottom: "1px solid rgba(112, 112, 112, 0.18)" }}>
                  <span style={{ fontSize: "16px", paddingBottom: "5px" }}>Name Surname</span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px", marginBottom: "15px" }}>Location</span>
                </Box>

                <Box m={4} style={{ borderBottom: "1px solid rgba(112, 112, 112, 0.18)" }}>
                  <span style={{ fontSize: "16px", paddingBottom: "5px" }}>Name Surname</span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px", marginBottom: "15px" }}>Location</span>
                </Box>

                <Box m={4} style={{ borderBottom: "1px solid rgba(112, 112, 112, 0.18)" }}>
                  <span style={{ fontSize: "16px", paddingBottom: "5px" }}>Name Surname</span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px", marginBottom: "15px" }}>Location</span>
                </Box>

                <Box m={4} style={{ borderBottom: "1px solid rgba(112, 112, 112, 0.18)" }}>
                  <span style={{ fontSize: "16px", paddingBottom: "5px" }}>Name Surname</span>
                  <br />
                  <span style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px", marginBottom: "15px" }}>Location</span>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>

        <AdditionalDocuments documents={entry.additionalDocuments} />
        
        <div class = "waypoints" height = "211px">
          <h2 style={{ fontSize: "34px", lineHeight: "40px", color: "rgba(42, 38, 38, 0.87)", marginBottom: "25px"}}>List of waypoints - optional depending on event</h2>
          <Box style={{ border: "1px solid rgba(112, 112, 112, 0.28)", marginBottom: "22px"}}>
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", marginBottom: "15px", fontWeight: "normal"}}>Name of the first waypoint</h4>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", fontWeight: "normal",marginBottom: "15px", marginTop: "0" }}>Location</h4>
                <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", marginBottom: "64px", marginRight: "16px", textAlign: "justify" }}>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ border: "1px solid rgba(112, 112, 112, 0.28)", marginBottom: "22px" }}>
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", marginBottom: "15px", fontWeight: "normal" }}>Name of the first waypoint</h4>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", fontWeight: "normal", marginBottom: "15px", marginTop: "0" }}>Location</h4>
                <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", marginBottom: "64px", marginRight: "16px", textAlign: "justify" }}>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ border: "1px solid rgba(112, 112, 112, 0.28)", marginBottom: "22px" }}>
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", marginBottom: "15px", fontWeight: "normal" }}>Name of the first waypoint</h4>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", fontWeight: "normal", marginBottom: "15px", marginTop: "0" }}>Location</h4>
                <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", marginBottom: "64px", marginRight: "16px", textAlign: "justify" }}>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ border: "1px solid rgba(112, 112, 112, 0.28)", marginBottom: "22px" }}>
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid items xs={8}>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", marginBottom: "15px", fontWeight: "normal" }}>Name of the first waypoint</h4>
                <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.87)", fontWeight: "normal", marginBottom: "15px", marginTop: "0" }}>Location</h4>
                <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", marginBottom: "64px", marginRight: "16px", textAlign: "justify" }}>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
              </Grid>
            </Grid>
          </Box>
        </div>


        <div className="reviews" style={{marginLeft:"145px"}}>
          <h2 style={{ fontSize: "40px", lineHeight: "47px", color: "rgba(0, 0, 0, 0.6)", marginBottom: "15px", fontWeight: "normal"}}>Reviews</h2>
          <h4 style={{ fontSize: "24px", lineHeight: "28px", color: "rgba(0, 0, 0, 0.6)", marginTop: "15px", fontWeight: "normal"}}>100 reviews</h4>
          
          <Grid container>
            <Grid item={6}>
              <div style={{width: "300px", marginRight:  "50px"}}>
                <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between"}}>
                  <span style={{fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)"}}>Route</span>
                  <Rating style={{ alignSelf: "center" }}score={4} max={5} />
                </div>
                <div>
                  <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between"}}>
                    <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Service</span>
                    <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item={6}>
              <div style={{ width: "300px", marginRight: "50px" }}>
                <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Description quality</span>
                  <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                </div>
                <div>
                  <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Location</span>
                    <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

          <div className="your-review" style={{ marginLeft: "145px" }}>
            <h2 style={{ fontSize: "40px", lineHeight: "47px", color: "rgba(0, 0, 0, 0.6)", marginBottom: "15px", fontWeight: "normal" }}>Your review</h2>

            <Grid container>
              <Grid item={6}>
                <div style={{ width: "300px", marginRight: "50px" }}>
                  <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Route</span>
                    <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Service</span>
                      <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item={6}>
                <div style={{ width: "300px", marginRight: "50px" }}>
                  <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Description quality</span>
                    <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignContent: "center", marginBottom: "20px", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "14px", lineHeight: "16px", color: "rgba(0, 0, 0, 0.6)" }}>Location</span>
                      <Rating style={{ alignSelf: "center" }} score={4} max={5} />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            
            <div display="flex">
              <div>
                <TextField id="outlined-basic" variant="outlined" style={{ width: "-webkit - fill - available", border: "1px solid rgba(112, 112, 112, 0.18)", marginBottom:"20px" }} />
              </div>
              <Button variant="outlined" style={{ border: "1px solid #007FFE", fontWeight: "normal",
              fontSize: "14px", lineHeight: "16px", alignText: "right", color: "rgba(0, 0, 0, 0.6)", marginBottom: "145px"}}>Publish</Button>
            </div>
    
          </div>
          
          
          
          



          <div className="others-reviews" style={{marginLeft:"145px"}}>
            <Grid container>
              <Grid item xs={2} style={{alignSelf:"center"}}><img src={photoReview}/></Grid>
              <Grid item xs={3} style={{ alignSelf: "center" }}>
                <ul style={{ listStyle: "none", fontStyle: "normal", fontWeight: "500", fontSize: "18px", 
                lineHeight: "21px", color: "rgba(0, 0, 0, 0.6)"}} >
                  <li style= {{paddingBottom: "5px"}}>Name Surname</li>
                  <li style={{ paddingBottom: "5px" }}>Date</li>
                  <li style={{ paddingBottom: "5px" }}>overall rating</li>
                  <li style= {{ paddingBottom: "5px" }}><Rating score={4} max={5} /></li>
                </ul>
              </Grid>
              <Grid item xs={7} style={{ alignSelf: "center" }}>
                <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", textAlign: "justify"}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                </p>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={2} style={{ alignSelf: "center" }}><img src={photoReview} /></Grid>
              <Grid item xs={3} style={{ alignSelf: "center" }}>
                <ul style={{
                  listStyle: "none", fontStyle: "normal", fontWeight: "500", fontSize: "18px",
                  lineHeight: "21px", color: "rgba(0, 0, 0, 0.6)"
                }} >
                  <li style={{ paddingBottom: "5px" }}>Name Surname</li>
                  <li style={{ paddingBottom: "5px" }}>Date</li>
                  <li style={{ paddingBottom: "5px" }}>overall rating</li>
                  <li style={{ paddingBottom: "5px" }}><Rating score={4} max={5} /></li>
                </ul>
              </Grid>
              <Grid item xs={7} style={{ alignSelf: "center" }}>
                <p style={{ fontSize: "16px", lineHeight: "19px", color: "rgba(0, 0, 0, 0.6)", textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                  </p>
              </Grid>
            </Grid>
          </div>
           

      </Container>
    </div>
  }
}

export default App;