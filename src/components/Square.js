import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    const { onClick, index } = this.props;
    console.log('in square element, index is ', index);
    return (
      <button className="square" onClick={() => onClick(index)}>
      </button>
    );

  }
}