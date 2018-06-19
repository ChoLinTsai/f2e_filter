import React, { Component } from 'react';
import './app.scss';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';




export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 

     };
  }

  render() {

    return (
      <div className="appBlock">
          <Header />
          <div className="bodyWrapper container">
            <Sidebar />
            <Main />
          </div>
          
      </div>
    )
    
  }
}