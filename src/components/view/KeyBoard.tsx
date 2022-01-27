import React from 'react'

const hiragana =
  'あ い う え お,か き く け こ,さ し す せ そ,た ち つ て と,な に ぬ ね の,は ひ ふ へ ほ,ま み む め も,や ゆ よ,わ ん'
export default function KeyBoard() {
  const ary = hiragana
    .trim()
    .split(',')
    .map(function (item) {
      return item.trim().replace(/\s+/g, ' ').split(' ')
    })
  return (
    <>
      {ary.map((items, index) => {
        return (
          <div>
            {items.map((subItems, sIndex) => {
              return (
                <div
                  key={sIndex}
                  className="m-px flex h-10 w-10 items-center justify-center rounded-xl border-2 border-solid border-black"
                >
                  {subItems}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
