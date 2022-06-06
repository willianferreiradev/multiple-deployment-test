import type { NextPage } from 'next'
import { useEffect } from 'react'


const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('Env', process.env.NEXT_PUBLIC_TITLE)
    }, 5000);
  }, [])
  return (
    <div>{process.env.NEXT_PUBLIC_TITLE ? 'Texto padrão' : `${process.env.TITLE}`}</div>
  )
}

export default Home
