import {
  AppBar,
  Box,
  Button,
  Container,
  Icon,
  Toolbar,
} from '@material-ui/core'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import React from 'react'

export default function Header() {
  return (
    <div className="mb-3 mt-3 flex border-b-2">
      <button>
        <IconContext.Provider value={{ size: '25px' }}>
          <BsFillQuestionCircleFill />
        </IconContext.Provider>
      </button>
      <Container maxWidth="sm">
        <div className="flex justify-center text-center text-4xl font-bold uppercase text-gray-800">
          Wordle
        </div>
      </Container>
      <button className="mr-3">
        <IconContext.Provider value={{ size: '25px' }}>
          <BsFillQuestionCircleFill />
        </IconContext.Provider>
      </button>
      <button className="mr-1">
        <IconContext.Provider value={{ size: '25px' }}>
          <BsFillQuestionCircleFill />
        </IconContext.Provider>
      </button>
    </div>
  )
}
