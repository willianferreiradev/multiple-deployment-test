import type { NextPage } from 'next'
import { useEffect } from 'react'


const Home: NextPage = () => {
  useEffect(() => {
    console.log('Env', process.env)
  }, [])
  return (
    <div>{process.env.TITLE || 'Texto padrão'}</div>
  )
}

export default Home
