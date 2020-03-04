import React from 'react'
import './css/Th.css'

const Resizable = require('react-resizable').Resizable
const ResizableBox = require('react-resizable').ResizableBox
export default class Th extends React.Component {
  constructor(props) {
    super(props);
  }
  width = 50;
  height = 20;
  state = { width: this.width, height: this.height };

  onClick = () => {
    this.setState({ width: this.width, height: this.height });
  };

  onResize = (event, { element, size, handle }) => {
    this.setState({ width: size.width, height: size.height });
  };
  render() {
    console.log('this.props.show:', this.props.show);
    return (
      <Resizable className={"" + (this.props.show == 0 ? 'box hideCss' : 'box')} height={this.state.height} width={this.state.width} onResize={this.onResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']} >
        <th className={"" + (this.props.show == 0 ? 'box hideCss' : 'box')} style={{ width: this.state.width + 'px', height: this.state.height + 'px' }}>
          {this.props.children}
        </th>
      </Resizable>
    )
  }
}
