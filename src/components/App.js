import React, { Component } from 'react';

import Header from './Header';
import Title from './Title';

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Title />
        </div>
      </div>
    );
  }
}