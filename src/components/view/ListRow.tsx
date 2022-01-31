import React from 'react'
import ListSquare from './ListSquare'

export default function ListRow(props: any) {
  const arry = ['', '', '', '']
  return (
    <div className="flex">
      {arry.map((value, i) => (
        <ListSquare
          values={props.list[props.rowNum + i]}
          key={i}
          value={value}
        />
      ))}
    </div>
  )
}
