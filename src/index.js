import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './components/index.scss'



class Index extends Component {

  render() {
    return (
      <div className={style.indexStyle}>

        <h1>This is a H1</h1>

      </div>
    );
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('index')
)
