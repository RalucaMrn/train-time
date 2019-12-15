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

class App extends React.Component {
  render() {
    const entry = {
      title: 'Hiking in the Tatras',
      author: {
        img: '',
        name: 'David',
        languages: 'English, French, Portuguese',
        score: '4',
        reviewsNumber: '5'
      },
      images: [],
      locations: { // departure & destination
        departure: {
          location: 'Prague....',
          when: 'Start at 10:00...'
        },
        destination: {
          location: 'Brno....',
          when: 'End at 10:00...'
        },
      },
      levelOfDifficulty: 'Moderate',
      
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
          <Grid xs="12">
          <h2>{entry.title}</h2>
          </Grid>
          <Grid xs="8">
            <Author author={entry.author}/>

            <div class="location">
              <h6>Location</h6>
              <div class="col-1">
                <img src="ICONITA" />
                {entry.locations.departure.location}
                <img src="ICONITA" />
                Brno, Czech Republic
                <h6>Level of dificulty</h6>
                <img src="ICONITA" />
                Moderate
                <h6>Participants</h6>
                <img src="ICONITA" />
                up to 10 people
                <img src="ICONITA" />
                10 people joined
              </div>
            </div>
            <div class="COLOANA-2">
              <p>Start at 10:00 AM on 10 May 2019</p>
              <p>End at 11:00 AM on 10 May 2019</p>
              <h6>Duration</h6>
              <p>4 hours</p>
            </div>

            <div class="INCLUDED">
              <h4>Included</h4>
              <ul>
                <li>
                  <img src="ICONITA" />
                  food
              </li>
                <li>
                  <img src="ICONITA" />
                  drinks
              </li>
                <li>
                  <img src="ICONITA" />
                  equipment
              </li>
              </ul>
            </div>

            <div class="content">
              <h4>Included</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>

            <div class="content">
              <h4>Requirements</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
          </p>
            </div>

            <div class="content">
              <h4>Requirements</h4>
              <ul>
                <li>Condition</li>
                <li>Condition</li>
                <li>Condition</li>
                <li>Condition</li>
                <li>Condition</li>
              </ul>
            </div>

            <div class="content">
              <h4>Route descriptio*</h4>
              <p>Suspendisse nisi leo, consectetur id dictum et, sagittis a justo. Fusce at condimentum mi. Nulla ante felis, molestie sed ultricies a, elementum quis nulla. Vestibulum vehicula tempus lectus placerat finibus. Quisque feugiat sed sem at faucibus. Aenean ac libero mattis, faucibus sem et, gravida justo. Maecenas dictum lobortis nisi, vel interdum dolor malesuada eu. Nunc facilisis neque sed tortor elementum pretium.In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.
            </p>
            </div>
          </Grid>
          <Grid xs="4">
            <div class="sidebar-left">
              <p>How many guests will come with you?</p>
              <div>
                counter
            <button>JOIN THIS EVENT</button>
                <button>ADD TO WISHLIST</button>
              </div>
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
          <div class="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
          <div class="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
          <div class="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
          <div class="waypoint">
            <img src="" />
            <h4>Name of the first waypoint</h4>
            <h4>Location</h4>
            <p>In vehicula ut enim vitae dapibus. Cras auctor interdum lorem, a consequat massa rutrum in. Morbi turpis nisi, feugiat eu nunc nec, laoreet aliquet quam. Duis molestie porta elementum. Integer nisi nisl, facilisis in semper a, condimentum id urna.</p>
          </div>
        </div>
        <div class="reviews">
          <h1>Reviews</h1>
          <h3>100 reviews</h3>
          <p>
            <input />Route
              <img src="steluta" />
          </p>
          <p>
            <input />Service
              <img src="steluta" />
          </p>
          <p>
            <input />Description quality
              <img src="steluta" />
          </p>
          <p>
            <input />Location
              <img src="steluta" />
          </p>

          <div class="your-review">
            <h1>Your review</h1>
            <h3>100 reviews</h3>
            <p>
              <input />Route
                <img src="steluta" />
            </p>
            <p>
              <input />Service
                <img src="steluta" />
            </p>
            <p>
              <input />Description quality
                <img src="steluta" />
            </p>
            <p>
              <input />Location
                  <img src="steluta" />
            </p>
            <input />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu

              <button>Publish</button>

            <div class="others-reviews">
              <div>
                <img />
                <p>Name Surname</p>
                <p>Date</p>
                <p>overall rating</p>
                <img src="steluta" />
                <inpt>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                  </inpt>
              </div>
              <div>
                <img />
                <p>Name Surname</p>
                <p>Date</p>
                <p>overall rating</p>
                <img src="steluta" />
                <inpt>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu
                  </inpt>
              </div>
            </div>
          </div>
        </div>
        

      </Container>
    </div>
  }
}

export default App;