import React, { Component } from 'react';

import Card from '../Card';

const under = {
  textDecoration: "underline"
}

const honey = {
  color: "#eb9605"
}

export default class Intro extends Component {
  render() {
    return(
      <div>
        <h1 style={under}>A f r o L u m i a</h1>
        <p style={honey}>for bohemians with culture</p>
        <Card />
      </div>
    );
  }
}