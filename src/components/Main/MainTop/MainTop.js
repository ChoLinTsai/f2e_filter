import React, { Component } from 'react';
import './mainTop.scss';

export default class MainTop extends Component {

  render() {
    return (
      <section className="mainTopBlock">
        <h5>Showing <span>15</span> results by…</h5>
        <div className="tagBlock">
          <div className="chip">
            Koahsiung
            <i className="close material-icons">close</i>
          </div>
          <div className="chip">
            Entertainment
            <i className="close material-icons">close</i>
          </div>
        </div>
      </section>
    )
  }
}