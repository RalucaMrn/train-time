import React from 'react';
import Button from '@material-ui/core/Button';
import Rating from './components/rating'
import HeaderMenu from './components/header-menu'
import Slider from './components/slider'
import { Container } from '@material-ui/core';
import AdditionalDocuments from './components/additional-documents'
import Author from './components/author'
import Locations from './components/locations'
import Box from '@material-ui/core/Box'
import IncludedItems from './components/included'
import Counter from './components/counter'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SocialMedia from './components/social-media'
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
      images: [
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/flagged/photo-1580232629990-f94c97e83bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/flagged/photo-1580232558186-69e21299e416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1579650475216-0e196c032612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      ],

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
      <Slider images={entry.images} />

      <Container>
        <div className="">
          <div className="row">
            <h2>{entry.title}</h2>
          </div>
          <div className="row">
            <div className="main">
              <Author author={entry.author} />
              <Locations locations={entry.locations} />
              <IncludedItems items={entry.includedItems} />

              <div className="content">
                <h4>About event</h4>
                <p>
                  Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
                </p>
              </div>

              <div className="content">
                <h4>Requirements</h4>
                <p>
                  Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
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
                <p>
                  Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
                </p>
              </div>

              <div className="content">
                <h4>Route description</h4>
                <p>
                  Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
                </p>
              </div>
            </div>
            

            <div className="sidebar-left">
              <Counter />

              <div className="join">
                <Button className="join-event" variant="contained" size="medium">
                  JOIN THIS EVENT
                </Button>
              </div>

              <div className="join">
                <Button color="secondary">
                  <FavoriteBorderIcon ></FavoriteBorderIcon>
                  ADD TO WISHLIST
                </Button>
              </div>


              <Box className="wheater">
                
                <span>Weather Widget</span>
              </Box>

              <div className="share">
                <span>Share with friends:</span>
                <SocialMedia />
              </div>

              <Box className="map">
              </Box>

              <Box className="participants-box">
                <h4>Participants</h4>
                <Box className="participant" m={4}>
                  <span className="participant-name">Name Surname</span>
                  <br />
                  <span className="participant-location">Location</span>
                </Box>

                <Box className="participant" m={4}>
                  <span className="participant-name">Name Surname</span>
                  <br />
                  <span className="participant-location">Location</span>
                </Box>

                <Box className="participant" m={4}>
                  <span className="participant-name">Name Surname</span>
                  <br />
                  <span className="participant-location">Location</span>
                </Box>

                <Box className="participant" m={4}>
                  <span className="participant-name">Name Surname</span>
                  <br />
                  <span className="participant-location">Location</span>
                </Box>

                <Box className="participant" m={4}>
                  <span className="participant-name">Name Surname</span>
                  <br />
                  <span className="participant-location">Location</span>
                </Box>
              </Box>
            
            </div>
          </div>
        </div>

        <AdditionalDocuments documents={entry.additionalDocuments} />

        <div className="waypoints-list">
          <h2>List of waypoints - optional depending on event</h2>

          <Box className="waypoint">
            <div className="flex-containter">
              <div className="row">
                <div className="colum photo-column">
                  <div></div>
                </div>
                <div className="colum text-column">
                  <div>
                    <h4>Name of the first waypoint</h4>
                    <h3>Location</h3>
                    <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>

          <Box className="waypoint">
            <div className="flex-containter">
              <div className="row">
                <div className="colum photo-column">
                  <div></div>
                </div>
                <div className="colum text-column">
                  <div>
                    <h4>Name of the first waypoint</h4>
                    <h3>Location</h3>
                    <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>

          <Box className="waypoint">
            <div className="flex-containter">
              <div className="row">
                <div className="colum photo-column">
                  <div></div>
                </div>
                <div className="colum text-column">
                  <div>
                    <h4>Name of the first waypoint</h4>
                    <h3>Location</h3>
                    <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>

          <Box className="waypoint">
            <div className="flex-containter">
              <div className="row">
                <div className="colum photo-column">
                  <div></div>
                </div>
                <div className="colum text-column">
                  <div>
                    <h4>Name of the first waypoint</h4>
                    <h3>Location</h3>
                    <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>


        <div className="reviews-list">
          <h2>Reviews</h2>
          <h4>100 reviews</h4>

          <div className="flex-containter">
            <div className="row">
              <div className="colum ">
                <div>
                  <div className="review">
                    <div className="review-rating">
                      <span>Route</span>
                      <Rating className="actual-rating" score={4} max={5} />
                    </div>
                    <div>
                      <div className="review-rating">
                        <span>Service</span>
                        <Rating className="actual-rating" score={4} max={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colum ">
                <div>
                  <div className="review">
                    <div className="review-rating">
                      <span>Description quality</span>
                      <Rating className="actual-rating" score={4} max={5} />
                    </div>
                    <div>
                      <div className="review-rating">
                        <span>Location</span>
                        <Rating className="actual-rating" score={4} max={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex-containter">
            <div className="row">
              <div className="colum ">
                <div>
                  <div className="review">
                    <div className="review-rating">
                      <span>Route</span>
                      <Rating className="actual-rating" score={4} max={5} />
                    </div>
                    <div>
                      <div className="review-rating">
                        <span>Service</span>
                        <Rating className="actual-rating" score={4} max={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colum ">
                <div>
                  <div className="review">
                    <div className="review-rating">
                      <span>Description quality</span>
                      <Rating className="actual-rating" score={4} max={5} />
                    </div>
                    <div>
                      <div className="review-rating">
                        <span>Location</span>
                        <Rating className="actual-rating" score={4} max={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="your-review">
            <h2>Your review</h2>

            <div className="flex-containter">
              <div className="row">
                <div className="colum ">
                  <div>
                    <div className="review">
                      <div className="review-rating">
                        <span>Route</span>
                        <Rating className="actual-rating" score={4} max={5} />
                      </div>
                      <div>
                        <div className="review-rating">
                          <span>Service</span>
                          <Rating className="actual-rating" score={4} max={5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colum ">
                  <div>
                    <div className="review">
                      <div className="review-rating">
                        <span>Description quality</span>
                        <Rating className="actual-rating" score={4} max={5} />
                      </div>
                      <div>
                        <div className="review-rating">
                          <span>Location</span>
                          <Rating className="actual-rating" score={4} max={5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="row">
                <TextField className="review-input" id="outlined-basic" variant="outlined" />
              </div>
              <div className="row">
                <Button classname="review-publish " variant="outlined">Publish</Button>
              </div>
            </div>

          </div>




          <div className="others-reviews">
            <div className="row">
              <div className="round-photo-column">
                <img src={photoReview} alt="" />
              </div>
              <div className="personal-details-column">
                <ul>
                  <li>Name Surname</li>
                  <li>Date</li>
                  <li>overall rating</li>
                  <li><Rating score={4} max={5} /></li>
                </ul>
              </div>
              <div className="others-review-colum">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                </p>
              </div>
            </div>

            <div className="row">
              <div className="round-photo-column">
                <img src={photoReview} alt="" />
              </div>
              <div className="personal-details-column">
                <ul>
                  <li>Name Surname</li>
                  <li>Date</li>
                  <li>overall rating</li>
                  <li><Rating score={4} max={5} /></li>
                </ul>
              </div>
              <div className="others-review-colum">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  }
}

export default App;