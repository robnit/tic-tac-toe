import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    const { onClick, index, value } = this.props;
    return (
      <button className="square" onClick={() => onClick(index)}>
        <h1>{value}</h1>
      </button>
    );

  }
}