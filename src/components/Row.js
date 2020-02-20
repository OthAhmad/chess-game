import React from "react";
import Square from "./Square";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
      value: this.props.value
    };
  }
  renderSquare(i) {
    return (
      <Square
        row={this.state.num}
        col={i}
        value={this.state.value[i]}
        onClick={() => this.props.onClick(this.state.num, i)}
        onDrop={ev => this.props.onDrop(this.state.num, i, ev)}
      />
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
      </div>
    );
  }
}
