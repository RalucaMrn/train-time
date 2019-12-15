import React from 'react';
import { Container } from '@material-ui/core';
import Language from './../assets/svg/language.svg'

export default class HeaderMenu extends React.Component {
  render() {

    return (
      <Container>
        <div class="header-menu" alignItems="center">
        <a href="#">
          <h3>TITLE</h3>
        </a>
        <nav>
          <ul>
            <li><a href="#">Latest news</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Log in</a></li>
            <li><a href="#"><img src={Language} class="globe" /></a></li>
            <li>EN</li>
          </ul>
        </nav>
      </div>
      </Container>
    );
  }
}
