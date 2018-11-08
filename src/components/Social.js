import React, { Component } from 'react';

import './App.css';

export default class Social extends Component {
  render() {
    return(
      <div>
        <a href="https://instagram.com" alt="Instagram" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram fa-2x social"></i>
        </a>
      </div>
    );
  }
}