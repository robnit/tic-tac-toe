import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className="square" onClick={onClick}>
      </button>
    );

  }
}