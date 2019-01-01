import React, { Component } from 'react';

import './App.css';

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  marginTop: "4em"
}

const honeyBold_underWhite = {
  color: "#eb9605",
  fontStyle: "bold",
  textDecoration: "underline",
  textDecorationColor: "#fff"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
      <h5>a <a style={honeyBold_underWhite} href="https://poetrique.xyz" alt="poetrique" title="Poetrique | Tech & Art">poetrique</a> initiative</h5>
        <h6>Usheninte &copy; 2018 - 2019</h6>
      </div>
    );
  }
}
