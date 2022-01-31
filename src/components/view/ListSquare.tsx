import React from 'react'
const hiragana =
  'あ い う え お,か き く け こ,さ し す せ そ,た ち つ て と,な に ぬ ね の,は ひ ふ へ ほ,ま み む め も,や ゆ よ,わ ん'
const ary = hiragana
  .trim()
  .split(',')
  .map(function (item) {
    return item.trim().replace(/\s+/g, ' ').split(' ')
  })
export default function ListSquare(props: any) {
  return (
    <div
      className="m-px flex h-16 w-16 items-center justify-center rounded-xl border-2 border-solid border-indigo-600 text-xl font-semibold"
      key={props.key}
    >
      {props.values.letter}
    </div>
  )
}
