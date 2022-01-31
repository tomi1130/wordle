import React from 'react'
import ListRow from './ListRow'
import { LetterInfo, LetterRow } from '../../pages'

export default function ListLine(props: any) {
  const array = ['a', 'a', 'a', 'a', 'a']
  let aryLen = props.list.length
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
  console.log(ary)
  return (
    <div className=" m-2 flex-col">
      {array.map((value, key) => (
        <ListRow list={ary} rowNum={key + props.times * 5} value={value} />
      ))}
    </div>
  )
}
