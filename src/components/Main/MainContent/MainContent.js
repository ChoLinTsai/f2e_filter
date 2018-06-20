import React, { Component } from 'react';
import './mainContent.scss';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          id: 1,
          title: 'Kogi Cosby sweater.',
          img: 'https://lorempixel.com/220/220/city/',
          name: 'Ethan Foster',
          detail: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.',
          location: 'Kaohsiung City',
          tags: 'Entertainment',
          date: '2018/5/24 - 2018/5/31',
        },
        {
          id: 2,
          title: 'In the tumultuous business.',
          img: 'https://lorempixel.com/220/220/city/',
          name: 'Herman Cobb',
          detail: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.',
          location: 'Kaohsiung City',
          tags: 'Entertainment',
          date: '2018/5/31 - 2018/6/14',
        },
        {
          id: 3,
          title: 'I have hinted that I would often...',
          img: 'https://lorempixel.com/220/220/city/',
          name: 'Landon Powers',
          detail: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.',
          location: 'Kaohsiung City',
          tags: 'Entertainment',
          date: '2018/6/15 - 2018/6/30',
        }
      ]
    };
  }
  render() {

    console.log(this.state.stores)
    const mainContent = this.state.stores.map( i => {
      return  <div key={i.id} className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={i.img} />
                  </div>
                  <div className="card-stacked">
                    <div className="card-title">
                      <h5>{i.title}</h5>
                    </div>
                    <div className="card-content">
                      <p>{i.detail}</p>
                    </div>
                    <div className="card-action">
                      <div className="nameTagBlock">
                        <h6>{i.name}</h6>
                        <div className="chip">
                        {i.tags}
                          <i className="close material-icons">close</i>
                        </div>
                      </div>

                      <div className="locationDateBlock">

                        <div className="locationIconEle">
                          <i className="material-icons">location_on</i>
                          <p>{i.location}</p>
                        </div>
                        
                        <div className="dateIconEle">
                          <i className="material-icons">date_range</i>
                          <p>{i.date}</p>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
    })





    return (
      <section className="mainContentBlock">
        {mainContent}
        {/* <div className="col s12">
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
        </div> */}
      </section>
    )
  }
}