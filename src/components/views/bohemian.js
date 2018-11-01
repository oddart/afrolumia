import React, { Component } from 'react';

const note = {
  color: "#fff"
}

const black = {
  color: "#000"
}

const logo = {
  width: "400px",
  height: "auto" 
} 

export default class Bohemian extends Component {
  render() {
    return(
      <div>
        <div>
          <div id="card">
            <h3 style={note}>/bəʊˈhiːmɪən/</h3>
            <p style={black}>A bohemian is a socially unconventional person, especially one who is involved in the arts.</p>
          </div>
          <div>
            <img style={logo} src= {'https://res.cloudinary.com/poetrique/image/upload/c_scale,w_400/v1540972599/afrolumia/afrolumia_LOGO.png'} alt="AFROLUMIA" title="for bohemians with culture" />
          </div>
        </div>
      </div>
    );
  }
}
