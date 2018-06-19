import React, { Component } from 'react';
import './main.scss';

import MainTop from './MainTop/MainTop';
import MainContent from './MainContent/MainContent';

export default class Main extends Component {

  render() {
    return (
      <main className="mainBlock">
        <MainTop />
        <MainContent />
      </main>
    )
  }
}