import React from 'react'

export default function ListSquare(props: any) {
  return (
    <div className="m-px flex h-16 w-16 items-center justify-center rounded-xl border-2 border-solid border-indigo-600 text-xl font-semibold">
      {props.values.letter}
    </div>
  )
}
