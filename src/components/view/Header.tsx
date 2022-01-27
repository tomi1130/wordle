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
    <AppBar position="static">
      <Toolbar>
        <Button>
          <IconContext.Provider value={{ size: '25px' }}>
            <BsFillQuestionCircleFill />
          </IconContext.Provider>
        </Button>
        <Container maxWidth="sm">
          <div className="flex justify-center">Wordle</div>
        </Container>
        <Button>
          <IconContext.Provider value={{ size: '25px' }}>
            <BsFillQuestionCircleFill />
          </IconContext.Provider>
        </Button>
        <Button>
          <IconContext.Provider value={{ size: '25px' }}>
            <BsFillQuestionCircleFill />
          </IconContext.Provider>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
