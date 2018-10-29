import React, { Component } from 'react';

import './App.css';

export default class Card extends Component {
  render() {
    return(
      <div>
        <div id="card">
          <span id="inner-card">.</span>
        </div>
      </div>
    );
  }
}