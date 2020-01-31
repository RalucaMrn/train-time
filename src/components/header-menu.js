import React from 'react';
import { Container } from '@material-ui/core';
import Language from './../assets/svg/language.svg'

export default function HeaderMenu() {
  return (
    <Container>
      <div className="header-menu">
        <a href="https://www.google.com/">
          <h3>TITLE</h3>
        </a>
      <nav>
        <ul>
          <li><a href="https://www.google.com/">Latest news</a></li>
          <li><a href="https://www.google.com/">About</a></li>
          <li><a href="https://www.google.com/">Log in</a></li>
          <li><a href="https://www.google.com/"><img src={Language} className="globe" alt=""/> EN</a></li>
        </ul>
      </nav>
    </div>
    </Container>
    );
}
