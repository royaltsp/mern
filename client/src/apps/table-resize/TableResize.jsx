import React, { Component } from 'react'
import './TableResize.scss'
import { tableData } from './data';
// import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
// import Element from './components/Element'
// import Div from './components/Div';
import Table from './components/Table';

export default class TableResize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    this.setState({ students: tableData })
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    )
  }
}
