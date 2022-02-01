import React from 'react'
import ListRow from './ListRow'

export default function ListLine(props: any) {
  const array = ['a', 'a', 'a', 'a', 'a']
  let aryLen = props.list.length
  console.log(aryLen)
  let ary: any = []
  if (aryLen !== 40) {
    for (let i = 0; i < props.list.length; i++) {
      ary.push(props.list[i])
    }
    for (let j = props.list.length; j < 40; j++) {
      ary.push({ letter: '', match: false })
    }
  } else {
    ary = props.list
  }

  return (
    <div className=" m-2 flex-col">
      {array.map((value, key) => (
        <ListRow
          list={ary}
          rowNum={4 * key + props.times * 20}
          value={value}
          key={key}
        />
      ))}
    </div>
  )
}
