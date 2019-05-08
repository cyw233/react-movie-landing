import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Header extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: ''
    };
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <header className="Header">
          <img src="https://i.ibb.co/F4HgGnQ/amelie.png" width="160px" height="47px" alt="amelie" />
          <Navigation />
          <div id="search" className="Search">
            <input onChange={this.handleChange.bind(this)} type="search" placeholder="Search for a topic..." value={this.state.searchTerm} />
          </div>
        </header>
      </div>
    );
  }
}
