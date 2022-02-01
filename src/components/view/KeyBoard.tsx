import React from 'react'

const hiragana = `ぱ ぴ ぷ ぺ ぽ
ば び ぶ べ ぼ
だ ぢ づ で ど
ざ じ ず ぜ ぞ
が ぎ ぐ げ ご
わ を ー
や ゆ よ
ま み む め も
は ひ ふ へ ほ
な に ぬ ね の ん
た ち つ て と
さ し す せ そ
か き く け こ
あ い う え お`
const ary = hiragana
  .trim()
  .split('\n')
  .map(function (item) {
    return item.trim().replace(/\s+/g, ' ').split(' ')
  })
export default function KeyBoard(props: any) {
  const { pushKeyboard } = props

  return (
    <div className="flex">
      {ary.map((items, index) => {
        return (
          <div key={index} className="flex-col">
            {items.map((subItems, sIndex) => {
              return (
                <div
                  key={sIndex}
                  onClick={() => pushKeyboard(subItems)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-solid border-black  bg-blue-500 bg-opacity-50 text-xl  font-semibold hover:opacity-75"
                >
                  {subItems}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
