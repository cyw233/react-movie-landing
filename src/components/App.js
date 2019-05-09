import React, { Component } from 'react';

import Header from './Header';
import Title from './Title';
import ReactPlayer from 'react-player';

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="Trailer">
            <ReactPlayer width='100%' height='100%' url='https://www.youtube.com/watch?v=HUECWi5pX7o&t=1s' controls />
          </div>
          <Title />
        </div>
      </div>
    );
  }
}