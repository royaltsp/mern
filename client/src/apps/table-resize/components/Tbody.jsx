import React from 'react'

import { tableData } from '../data'
import Tr from './Tr'

export default function Tbody(props) {
  return (
    <tbody>
      {
        tableData.map((row, index) => {
          return <Tr key={index} row={row} />
        })
      }
    </tbody>
  )
}
