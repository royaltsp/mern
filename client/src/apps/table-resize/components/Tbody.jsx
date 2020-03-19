import React from "react";

import Td from "./Td";
import ProgressBar from "./ProgressBar";
import { connect } from "react-redux";
import { addTestCase, removeTestCase } from "../redux/actions/testCaseActions";

import './css/Tbody.scss'

function Tbody(props) {
  const { testCases, testCaseReducer } = props;
  console.log(testCaseReducer);

  function toggleTestCase(index) {
    console.log(index);
    let checked = document.getElementById(`checkBox${index}`).checked;
    checked ? props.addTestCase(index) : props.removeTestCase(index);
  }

  return (
    <tbody>
      {testCases.map((testCase, index) => {
        return (
          <tr key={index} className="">
            <Td width={50} height={20} scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`checkBox${index}`}
                  onChange={() => toggleTestCase(index)}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`checkBox` + index}
                ></label>
              </div>
            </Td>
            <Td width={110} height={20} scope="col">
              {testCase.generatedOn}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.suiteName}
            </Td>
            <Td width={70} height={20} scope="col">
              {testCase.projectName}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.executionType}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.iterationNo}
            </Td>
            <Td width={60} height={20} unit={'GB'} scope="col">
              {testCase.totalSize}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.reportSize}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.images}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.logs}
            </Td>
            <Td width={50} height={20} scope="col">
              {testCase.testCases}
            </Td>
            <Td width={50} height={20} scope="col">
              <ProgressBar testCaseStat={testCase.testCaseStat} />
            </Td>
          </tr>
        );
      })}
    </tbody>
  );
}

const mapStateToProps = state => {
  return {
    testCaseReducer: state.testCaseReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTestCase: index => dispatch(addTestCase(index)),
    removeTestCase: index => dispatch(removeTestCase(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
