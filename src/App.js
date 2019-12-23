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
            <div className="sidebar-left">
              <Counter />
              <Button variant="contained" size="medium" color="primary">
                JOIN THIS EVENT
              </Button>
              <br />
              <Button color="secondary">
                <FavoriteBorderIcon></FavoriteBorderIcon>
                ADD TO WISHLIST
                </Button>

              <div>
                weather widget
              </div>
              
              <div>
                <p>Share with friends:
                <img src="facebook" />
                  <img src="twitter" />
                  <img src="reddit" />
                </p>
              </div>
              <div>
                imagine
          </div>
              <div>
                <h5>Participants</h5>
                <ul>
                  <li>
                    <p>Name Surname</p>
                    <p>Locations</p>
                  </li>
                  <li>
                    <p>Name Surname</p>
                    <p>Locations</p>
                  </li>
                  <li>
                    <p>Name Surname</p>
                    <p>Locations</p>
                  </li>
                  <li>
                    <p>Name Surname</p>
                    <p>Locations</p>
                  </li>
                  <li>
                    <p>Name Surname</p>
                    <p>Locations</p>
                  </li>
                </ul>
              </div>

            </div>
          </Grid>
        </Grid>

        <AdditionalDocuments documents={entry.additionalDocuments} />
        
        <div class = "waypoints">
          <h2>List of waypoints - optional depending on event</h2>
          <div className="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
          <div className="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
          <div className="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
          <div className="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
        </div>
        <div className="reviews">
          <h1>Reviews</h1>
          <h3>100 reviews</h3>
          <p>Route
              <img src="steluta" />
          </p>
          <p>Service
              <img src="steluta" />
          </p>
          <p>Description quality
              <img src="steluta" />
          </p>
          <p>Location
              <img src="steluta" />
          </p>

          <div className="your-review">
            <h1>Your review</h1>
            <h3>100 reviews</h3>
            <p>
Route
                <img src="steluta" />
            </p>
            <p>
Service
                <img src="steluta" />
            </p>
            <p>
Description quality
                <img src="steluta" />
            </p>
            <p>
Location
                  <img src="steluta" />
            </p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu

              <button>Publish</button>

            <div className="others-reviews">
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
        </div>
        

      </Container>
    </div>
  }
}

export default App;