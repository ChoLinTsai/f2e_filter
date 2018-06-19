import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';



class Index extends Component {

  render() {
    return (
      <div className="indexStyle">

        <App />
        
      </div>
    );
  } 
}


ReactDOM.render(
  <Index />,
  document.getElementById('index')
)
