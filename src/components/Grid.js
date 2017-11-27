import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Square from './Square';

export default class Grid extends Component {

  handleClick(i) {
    this.addSymbol(i, X);
  }


  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {

    return(
      <div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );

  }
}