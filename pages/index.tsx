import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div>{process.env.TITLE || 'Texto padrão'}</div>
  )
}

export default Home
