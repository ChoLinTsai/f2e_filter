import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  
  render() {
    return (
      <section className="headerBlock">

        <div className="container">
          <div className="logoBlock">
            <h3>Have Fun</h3>
          </div>
          <div className="searchBlock">
            <nav>
              <div className="nav-wrapper purple darken-3">
                <form>
                  <div className="input-field">
                  <input id="search" type="search"
                    placeholder="Explore your own activities"/>
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
        
      </section>
    )
  }
}