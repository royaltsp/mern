import React from 'react'

import { Resizable, ResizableBox } from 'react-resizable'

export default class Div extends React.Component {

  constructor() {
    super();

    this.state = {
      width: 100,
      height: 100
    }
  }

  onResize(event, { element, size }) {
    this.setState({ width: size.width, height: size.height })
  }

  render() {
    return (
      <div>
        <ResizableBox width={this.state.width} height={this.state.height}
          minConstraints={[100, 100]} maxConstraints={[300, 300]}>
          <div style={{ backgroundColor: "red" }}>Hello</div>
        </ResizableBox>
        {/* <Resizable width={100} height={100} onResize={this.onResize}
          minConstraints={[100, 100]} maxConstraints={[300, 300]}>
          <div style={{ backgroundColor: "blue" }}>Hello</div>
        </Resizable> */}
      </div>
    )
  }
}
