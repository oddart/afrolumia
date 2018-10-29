import React, { Component } from 'react';

const note = {
  color: "#000",
  fontStyle: "italic"
}

export default class Bohemian extends Component {
  render() {
    return(
      <div>
        <div id="card">
          <h4 style={note}>/bəʊˈhiːmɪən/</h4>
        </div>
      </div>
    );
  }
}