import React from "react";
import ReactDOM from "react-dom";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.calculateColor()
    };
  }

  calculateColor() {
    var color = "#FFDEAD";
    if ((this.props.row + this.props.col) % 2 === 0) {
      color = "#DEB887";
    }
    return color;
  }

  onDragOver(ev) {
    ev.preventDefault();
  }

  onDragStart(ev, id) {
    ev.dataTransfer.setData("id", id);
    ev.dataTransfer.setData("row", this.props.row);
    ev.dataTransfer.setData("col", this.props.col);
  }

  render() {
    return (
      <button
        className="square"
        style={{ backgroundColor: this.state.color }}
        onClick={() => this.props.onClick()}
        onDragOver={ev => this.onDragOver(ev)}
        onDrop={ev => this.props.onDrop(ev)}
      >
        <img
          draggable="true"
          onDragStart={ev => this.onDragStart(ev, this.props.value)}
          src={this.props.value}
          alt="Chess piece"
        ></img>
      </button>
    );
  }
}
