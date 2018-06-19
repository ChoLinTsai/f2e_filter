import React, { Component } from 'react';
import './date.scss';

export default class Date extends Component {

  render() {
    return (
      <section className="dateBlock">
        <h5>Date</h5>

        <div className="timeBlock">
          <div className="startDateEle">
            <h6>From</h6>
            <input type="text" className="datepicker startDate" />
          </div>
          <div className="endDateEle">
            <h6>To</h6>
            <input type="text" className="datepicker endDate" />
          </div>
        </div>
      </section>    
    )
  }
}