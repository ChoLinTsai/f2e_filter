import React, { Component } from 'react';
import './location.scss';

export default class Location extends Component {

  render() {
    return (
      <section className="locationBlock">
        <h5>Location</h5>

        <div className="input-field col s12">
          <select>
            <option value="">Taiwan</option>
            <option value="1">Taipei</option>
            <option value="2">Taichung</option>
            <option value="3">Kaohsiung</option>
          </select>
        </div>
        
      </section>
    )
  }
}