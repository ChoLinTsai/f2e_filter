import React, { Component } from 'react';
import './mainContent.scss';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          title: 'Kogi Cosby sweater.',
          name: 'Ethan Foster',
          detail: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.',
          location: 'Kaohsiung City',
          tags: 'Entertainment',
          date: '2018/5/24 - 2018/5/31',
        }
      ]
    };
  }
  render() {
    return (
      <section className="mainContentBlock">
        <div className="col s12">
          <div className="card horizontal">

            <div className="card-image">
              <img src="https://lorempixel.com/220/220/city/" />
            </div>

            <div className="card-stacked">
              <div className="card-title">
                <h5>Kogi Cosby sweater.</h5>
              </div>
              
              <div className="card-content">
                <p>Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.</p>
              </div>

              <div className="card-action">
                <div className="nameTagBlock">
                  <h6>Ethan Foster</h6>
                  <div className="chip">
                    Entertainment
                    <i className="close material-icons">close</i>
                  </div>
                </div>

                <div className="locationDateBlock">

                  <div className="locationIconEle">
                    <i className="material-icons">location_on</i>
                    <p>Kaohsiung City</p>
                  </div>
                  
                  <div className="dateIconEle">
                    <i className="material-icons">date_range</i>
                    <p>2018/5/24 - 2018/5/31</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}