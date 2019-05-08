import React, { Component } from 'react';

export default class Navigation extends Component {
  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <ul>
                <li href="#">Trailers</li>
                <li href="#">Photos</li>
                <li href="#">Cast</li>
              </ul>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
            <div className="narrowLinks">
              <a href="#" onClick={this.burgerToggle.bind(this)}>Trailers</a>
              <a href="#" onClick={this.burgerToggle.bind(this)}>Photos</a>
              <a href="#" onClick={this.burgerToggle.bind(this)}>Cast</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
