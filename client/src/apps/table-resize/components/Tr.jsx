import React from 'react'
import Td from './Td'

export default function Tr(props) {
  return (
    <tr>
      <Td data={props.row.col1} />
      <Td data={props.row.col2} />
      <Td data={props.row.col3} />
      <Td data={props.row.col4} />
    </tr>
  )
}
