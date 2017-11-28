import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSymbol, resetGame } from '../game/actions';
import Square from './Square';
import 'bulma/css/bulma.css';

class Grid extends Component {
  handleClick(i) {
    this.props.onAddSymbol(i);
  }

  handleReset() {
    console.log('in handleReset');
    this.props.onReset();
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
    const tied = (this.props.tie) ? <div><span>You Tied</span> <button className="button" onClick={() => this.handleReset()}>RESET</button></div> : null;
    const winner = (this.props.whoWon !== 'nobody') ? <div><span>{this.props.whoWon} is the Winner</span> <button className="button" onClick={() => this.handleReset()}>RESET</button></div>  : null;
    return(
      <div className="center">
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
        <span>X wins: {this.props.xWins}</span>
        <span>O wins: {this.props.oWins}</span>
        <p>It's {this.props.activePlayer}'s turn</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grid: state.game.grid,
    tie: state.game.tie,
    whoWon: state.game.whoWon,
    xWins: state.game.xWins,
    oWins: state.game.oWins,
    activePlayer: state.game.activePlayer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddSymbol(position) {
      dispatch(addSymbol(position));
    },
    onReset() {
      console.log('in mapDispatch');
      dispatch(resetGame());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);