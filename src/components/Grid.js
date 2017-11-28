import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSymbol } from '../game/actions';
import Square from './Square';

class Grid extends Component {
  handleClick(i) {
    this.props.onAddSymbol(i);
  }

  //Question: this will only run initially. Does not update when props are updated
  renderSquare(i) {
    return (<Square 
      value={this.props.grid[i]}
      index={i}
      onClick={a => this.handleClick(a)
      }/>);
  }

  render() {
    const tied = (this.props.tie) ? <span>You Tied</span> : null;
    const winner = (this.props.whoWon !== 'nobody') ? <span>{this.props.whoWon} is the Winner</span> : null;
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
        <span>{winner}</span>
        <span>{tied}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grid: state.game.grid,
    tie: state.game.tie,
    whoWon: state.game.whoWon
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddSymbol(position) {
      dispatch(addSymbol(position));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);