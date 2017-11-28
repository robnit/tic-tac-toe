import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSymbol } from '../game/actions';
import Square from './Square';
import { X } from '../game/constants';

class Grid extends Component {
  handleClick(i) {
    this.props.onAddSymbol(i, X);
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
    //Question: why are there two nested gameReducers in this state param? Is there a better way to do this?
    grid: state.gameReducer.grid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddSymbol: (position, symbol) => {
      dispatch(addSymbol(position, symbol));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);