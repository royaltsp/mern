import React from "react";
import Th from "./Th";
import './css/Thead.scss'
import { connect } from "react-redux";

import { addTestCase, removeTestCase } from '../../../actions/testCaseActions'

function Thead(props) {
  const { testCasesCount, columnHeaders } = props;
  function toggleAllCheckBox() {
    const checkBoxAll = document.getElementById("checkBoxAll");
    if (checkBoxAll.checked)
      for (let i = 0; i < testCasesCount; i++) {
        let checkBox = document.getElementById(`checkBox${i}`);
        checkBox.checked = true;
        props.addTestCase(i);
      }
    else
      for (let i = 0; i < testCasesCount; i++) {
        let checkBox = document.getElementById(`checkBox${i}`);
        checkBox.checked = false;
        props.removeTestCase(i);
      }
  }
  return (
    <thead>
      <tr className="table-active">
        <Th width={50} height={20} scope="col">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkBoxAll"
              checked = {props.testCaseReducer.length === testCasesCount ? 'checked': ''}
              onChange={() => toggleAllCheckBox()}
            />
            <label
              className="custom-control-label"
              htmlFor="checkBoxAll"
            ></label>
          </div>
        </Th>
        {columnHeaders.map((columnHeader, index) => {
          return columnHeader === "Test Case Status" ? (
            <Th width={140} height={20} key={index} scope="col">
              {columnHeader}
            </Th>
          ) : (
            <Th width={0} height={0} key={index} scope="col">
              {columnHeader}
            </Th>
          );
        })}
      </tr>
    </thead>
  );
}

const mapStateToProps = state => {
  return {
    testCaseReducer: state.testCaseReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTestCase: index => dispatch(addTestCase(index)),
    removeTestCase: index => dispatch(removeTestCase(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thead);