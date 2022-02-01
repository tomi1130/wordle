import React from 'react'
import ListSquare from './ListSquare'

export default function ListRow(props: any) {
  const arry = props.list.filter(function (value: any, index: number) {
    if (index >= props.rowNum && index <= props.rowNum + 3) {
      return value
    }
  })
  return (
    <div className="flex">
      {arry.map((value: any, i: number) => (
        <ListSquare values={value} key={i} />
      ))}
    </div>
  )
}
