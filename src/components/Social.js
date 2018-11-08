import React, { Component } from 'react';

import './App.css';

const honey = {
  color: "#eb9605",
  marginTop: "4em"
}

export default class Social extends Component {
  render() {
    return(
      <div>
        <a style={honey}
        href="https://instagram.com" 
        alt="Instagram" target="_blank" 
        rel="noopener noreferrer">
          <i class="fab fa-instagram fa-3x social"></i>
        </a>
      </div>
    );
  }
}