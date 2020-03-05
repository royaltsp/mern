import React from "react";
// import Resizable from 'react-resizable';
// import ResizableBox from 'react-resizable';
import "./css/styles.css";
import "./css/table.css";

import columnHeaders from "../data/column-headers";
import testCases from "../data/test-cases";
import Thead from "./Thead";
import Tbody from "./Tbody";

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }
  // { width: number, height: number }

  hideCol = () => {
    this.setState({ show: 0 });
  };

  render() {
    return (
      <div>
        <div className="layoutRoot">
          <table className="table table-bordered">
            <Thead testCasesCount={testCases.length} columnHeaders = {columnHeaders} />
            <Tbody testCases={testCases} />
          </table>

          {/* <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
          <div className="box" style={{ width: this.state.width + 'px', height: this.state.height + 'px' }}>
          <span className="text">{"Raw use of <Resizable> element. 200x200, all Resize Handles."}</span>
          </div>
        </Resizable> */}
          {/* <ResizableBox className="box" width={200} height={200}>
            <span className="text">{"<ResizableBox>"}</span>
          </ResizableBox>
          <ResizableBox
            className="custom-box box"
            width={200}
            height={200}
            handle={<span className="custom-handle custom-handle-se" />}
            handleSize={[8, 8]}>
            <span className="text">{"<ResizableBox> with custom handle in SE corner."}</span>
          </ResizableBox>
          <ResizableBox
            className="custom-box box"
            width={200}
            height={200}
            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
            handleSize={[8, 8]}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <span className="text">{"<ResizableBox> with custom handles in all locations."}</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} draggableOpts={{ grid: [25, 25] }}>
            <span className="text">Resizable box that snaps to even intervals of 25px.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
            <span className="text">Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</span>
          </ResizableBox>
          <ResizableBox className="box box3" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
            <span className="text">Resizable box with a handle that only appears on hover.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} lockAspectRatio={true}>
            <span className="text">Resizable square with a locked aspect ratio.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={120} lockAspectRatio={true}>
            <span className="text">Resizable rectangle with a locked aspect ratio.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="x">
            <span className="text">Only resizable by "x" axis.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="y">
            <span className="text">Only resizable by "y" axis.</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="both">
            <span className="text">Resizable ("both" axis).</span>
          </ResizableBox>
          <ResizableBox className="box" width={200} height={200} axis="none">
            <span className="text">Not resizable ("none" axis).</span>
          </ResizableBox> */}
        </div>
      </div>
    );
  }
}
