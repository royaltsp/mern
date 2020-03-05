import React from "react";
import "./css/Th.css";

const Resizable = require("react-resizable").Resizable;
// const ResizableBox = require('react-resizable').ResizableBox
export default class Th extends React.Component {
  constructor(props) {
    super(props);
    this.width = this.props.width;
    this.height = this.props.height;
    this.state = { width: this.width, height: this.height };
  }

  onClick = () => {
    this.setState({ width: this.width, height: this.height });
  };

  onResize = (event, { element, size, handle }) => {
    this.setState({ width: size.width, height: size.height });
  };
  render() {
    return (
      <Resizable
        className={"" + (this.props.show === 0 ? "box hideCss" : "box")}
        height={this.state.height}
        width={this.state.width}
        onResize={this.onResize}
        resizeHandles={["e"]}
      >
        <th
          className={"" + (this.props.show === 0 ? "box hideCss" : "box")}
          style={{
            width: this.state.width + "px",
            height: this.state.height + "px"
          }}
        >
          {this.props.children}
        </th>
      </Resizable>
    );
  }
}
