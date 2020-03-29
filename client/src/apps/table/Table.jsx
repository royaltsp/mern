import React, { Component } from "react";
import ReactTable from "react-table-6";
const columns = [
  { Header: "Roll", accessor: "roll" },
  { Header: "Name", accessor: "name" }
];
const data = [
  { roll: 1, name: "Shubham" },
  { roll: 2, name: "Shubham" }
];
export default class Table extends Component {
  render() {
    return (
      <div>
        <ReactTable
          className="bg-dark text-white text-center"
          columns={columns}
          data={data}
        ></ReactTable>
      </div>
    );
  }
}
