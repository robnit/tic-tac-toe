import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSymbol } from '../game/actions';
import Square from './Square';
import { X } from '../game/constants';

class Grid extends Component {
  handleClick(i) {
    console.log('handleClick, i is', i);
    addSymbol(i, X);
  }

  renderSquare(i) {
    console.log('about to render a square, i is', i);
    return <Square 
      // value={this.state.squares[i]}
      index={i}
      onClick={a => {
        console.log('in onClick, i is', a);
        return this.handleClick(a);
      }
      }
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

function mapStateToProps(state) {
  return {
    grid: state
  };
}

export default connect(
  mapStateToProps,
  { addSymbol }
)(Grid);