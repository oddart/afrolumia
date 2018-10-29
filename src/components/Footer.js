import React, { Component } from 'react';

import './App.css';

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  marginTop: "4em"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h6>Usheninte &copy; 2018</h6>
      </div>
    );
  }
}
