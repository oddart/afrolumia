import React, { Component } from 'react';

const note = {
  color: "#000"
}

const honey = {
  color: "#eb9605"
}

const underBlack = {
  textDecoration: "underline",
  textDecorationColor: "#000"
}

export default class Bohemian extends Component {
  render() {
    return(
      <div>
        <div id="card">
          <h3 style={note}>/bəʊˈhiːmɪən/</h3>
          <p style={honey}>A <span style={underBlack}>bohemian</span> is a socially unconventional person, especially one who is involved in the arts.</p>
        </div>
      </div>
    );
  }
}