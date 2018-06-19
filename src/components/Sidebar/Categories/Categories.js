import React, { Component } from 'react';
import './categories.scss';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <section className="cateBlock">
        <h5>Categories</h5>
        <div className="checkBlock">
          <form action="#">
            <p>
              <label>
                <input type="checkbox"
                  className="filled-in" />
                <span>All</span>
              </label>
              <label>
                <input type="checkbox"
                  className="filled-in" />
                <span>Entertainment</span>
              </label>
              <label>
                <input type="checkbox"
                  className="filled-in" />
                <span>Food</span>
              </label>
              <label>
                <input type="checkbox"
                  className="filled-in" />
                <span>Learning</span>
              </label>
              <label>
                <input type="checkbox"
                  className="filled-in" />
                <span>Outdoors</span>
              </label>
            </p>
          </form>
        </div>
      </section>
    )
  }
}