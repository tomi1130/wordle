import React from 'react'
import ListSquare from './ListSquare'

export default function ListRow() {
  const array = ['a', 'a', 'a', 'a']
  return (
    <div className="flex">
      {array.map((value, key) => (
        <ListSquare />
      ))}
    </div>
  )
}
