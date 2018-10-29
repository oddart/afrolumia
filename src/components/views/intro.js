import React, { Component } from 'react';

const under = {
  textDecoration: "underline"
}

export default class Intro extends Component {
  render() {
    return(
      <div>
        <h1 style={under}>A f r o L u m i a</h1>
        <p>for bohemians with culture</p>
      </div>
    );
  }
}