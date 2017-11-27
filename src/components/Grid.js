import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSymbol } from '../game/actions';
import Square from './Square';

class Grid extends Component {
  renderSquare(i) {
    return <Square 
      // value={this.state.squares[i]}
      // onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    console.log('===sdgkjbsdgjk', );
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