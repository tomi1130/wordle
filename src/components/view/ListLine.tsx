import React from 'react'
import ListRow from './ListRow'

export default function ListLine() {
  const array = ['a', 'a', 'a', 'a']

  return (
    <div className="m-auto flex-col">
      {array.map((value, key) => (
        <ListRow />
      ))}
    </div>
  )
}
