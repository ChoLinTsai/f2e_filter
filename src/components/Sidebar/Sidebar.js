import React, { Component } from 'react';
import './sidebar.scss';

import Location from './Location/Location';
import Date from './Date/Date';
import Categories from './Categories/Categories';

export default class Sidebar extends Component {

  render() {
    return (
      <section className="sidebarBlock">
        <div className="sidebarPanel">
          <Location />
          <Date />
          <Categories />
        </div>
      </section>
    )
  }
}