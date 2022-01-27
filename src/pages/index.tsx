import type { NextPage } from 'next'
import Header from '../components/view/Header'
import KeyBoard from '../components/view/keyboard'
import ListLine from '../components/view/ListLine'

const Home: NextPage = () => {
  const arry = ['', '']
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="flex">
          {arry.map((value, key) => (
            <ListLine />
          ))}
        </div>
        <KeyBoard />
      </div>
    </>
  )
}

export default Home
