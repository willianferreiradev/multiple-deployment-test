import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
    </Container>
  )
}

export default Home
