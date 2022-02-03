import { Box, useToast } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/view/Header'
import KeyBoard from '../components/view/KeyBoard'
import ListLine from '../components/view/ListLine'

export class LetterInfo {
  letter: string = ''
  match: boolean = false
}
export class LetterRow {
  letterRow: Array<LetterInfo> = new Array<LetterInfo>()
}

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [errorText, setErrorText] = useState('')
  const [letterList, setLetterList] = useState<Array<LetterInfo>>([])
  const prevletterListLen = usePrevious(letterList)
  const [sideRow, setSideRow] = useState<any[]>([])
  const toast = useToast()

  useEffect(() => {
    if (text.length === 4) {
      console.log('ここで辞書の中から検索')
    }
    if (prevletterListLen !== letterList.length) {
      let arry = []
      for (let i = 0; i < 2; i++) {
        arry.push(<ListLine list={letterList} times={i} key={i} />)
      }
      setSideRow(arry)
    }
  }, [text, letterList])

  function usePrevious(value: any) {
    const ref = useRef(null)
    useEffect(() => {
      ref.current = value.length
    })
    return ref.current
  }

  const handleChange = (e: any) => {
    setText(() => e.target.value)
  }
  const pushKeyboard = (keyText: string) => {
    if (text === '' || text === null) {
      setText(() => keyText)
    } else {
      let escText = `${text}${keyText}`
      setText(() => escText)
    }
  }
  const OnClickGoButton = () => {
    const textAry = text.split('')
    if (textAry.length !== 4) {
      setErrorText('4文字のひらがなで入力してね!!')
      toast({
        title: 'sss',
        status: 'error',
        isClosable: true,
      })
    } else if (textAry.length === 4) {
      setErrorText('ナイス！！')
      checkText(textAry)
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Hello World
          </Box>
        ),
      })
    }
  }
  function checkText(textAry: string[]) {
    let ary = []
    for (let i = 0; i < letterList.length; i++) {
      ary.push(letterList[i])
    }
    for (let j = 0; j < 4; j++) {
      ary.push({ letter: textAry[j], match: false })
    }
    setLetterList(ary)
  }
  const handleClickOnedelete = () => {
    var sliceText = text.slice(0, -1)
    setText(sliceText)
  }
  const handleClickAlldelete = () => {
    setText('')
  }
  return (
    <div className="container mx-auto w-fit">
      <Header />
      <div className="m-px flex max-h-60 overflow-auto">{sideRow}</div>
      <div className="flex justify-center">
        <input
          className="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="inputForm"
          type="text"
          placeholder="キーボード入力用"
          value={text}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex justify-center">
        <div className="m-3 flex justify-center">
          <button
            className="rounded bg-green-400 px-2 py-1 text-xl font-semibold text-white hover:bg-green-500"
            onClick={handleClickOnedelete}
          >
            1文字消す!!
          </button>
        </div>

        <div className="m-3 flex justify-center">
          <button
            className="rounded bg-red-400 px-2 py-1 text-xl font-semibold text-white hover:bg-red-500"
            onClick={handleClickAlldelete}
          >
            全部消す!!
          </button>
        </div>
        <div className="m-3 flex justify-center">
          <button
            className="rounded bg-blue-400 px-2 py-1 text-xl font-semibold text-white hover:bg-blue-500"
            onClick={OnClickGoButton}
          >
            これでいく!!
          </button>
        </div>
      </div>
      <div className="flex max-h-60 overflow-auto">
        <KeyBoard pushKeyboard={pushKeyboard} />
      </div>
    </div>
  )
}

export default Home
