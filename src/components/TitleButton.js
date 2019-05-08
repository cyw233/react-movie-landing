import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleButton extends Component {
  render() {
    return (
      <div>
        <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
      </div>
    );
  }
}

TitleButton.propTypes = {
  primary: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};





