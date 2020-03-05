import React, { useEffect } from "react";
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/ProgressBar.scss'

export default function ProgressBar({ testCaseStat }) {
  const { passed, withDefects, failed, notExecuted } = testCaseStat;
  const popoverContent = `<div>
                            <span>Test Cases</span>
                            <br/>
                            <li><span class='text-success'>&#9679;</span>Passed ${passed}</li>
                            <li><span class='text-warning'>&#9679;</span>With Defects ${withDefects}</li>
                            <br/>
                            <li><span class='text-danger'>&#9679;</span>Failed ${failed}</li>
                            <li><span class='text-light'>&#9679;</span>Not Executed ${notExecuted}</li>
                          </div>`
  // const notExecutedLength = 100 - ( + withDefects + testCaseStat)
  useEffect(() => {
    $(document).ready(function () {
      $('.progress').popover({
        placement: 'bottom',
        trigger: 'hover'
      });
    });
  },[])

  return (
    <div className="progress" data-html="true" data-content={popoverContent}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${passed}%` }}
        aria-valuenow={`${passed}%`}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <div
        className="progress-bar bg-warning"
        role="progressbar"
        style={{ width: `${withDefects}%` }}
        aria-valuenow={`${withDefects}%`}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: `${failed}%` }}
        aria-valuenow={`${failed}%`}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <div
        className="progress-bar bg-light"
        role="progressbar"
        style={{ width: `${notExecuted}%` }}
        aria-valuenow={`${notExecuted}%`}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
