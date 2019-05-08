import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>Community</li>
            <li>Store</li>
            <li>More</li>
          </ul>
        </nav>
      </div>
    );
  }
}
