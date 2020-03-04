import React, { Component } from 'react'
import './TableResize.scss'
import { tableData, columns } from './data';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import Element from './components/Element'
import Div from './components/Div';
import RR from './components/RR';

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
        <RR />
      </div>
    )
  }
}
