import React, { Component } from 'react';
import TitleButton from './TitleButton';

export default class Title extends Component {
  render() {
    return (
      <div>
        <div className="content">
          {/* <img className="logo" src="https://i.ibb.co/F4HgGnQ/amelie.png" alt="amelie" /> */}
          <div className="button-wrapper">
            <TitleButton primary={true} text="Watch Online" />
            <TitleButton primary={false} text="Buy Physical" />
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
}
