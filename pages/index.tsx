import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;

  background-color: #38A3A5;
  color: #C7F9CC;
  text-align: center;

  > h1 {
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  > p {
    max-width: 50%;
    margin-top: 25px;

    @media only screen and (max-width: 1600px) {
      max-width: 80%;
    }

    @media only screen and (max-width: 800px) {
      max-width: 95%;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
      <p>this is a simple project to demonstrate multiple deploys on vercel.</p>
      <p>
        in the environment variables I look for the title that is up there. In this case I have the same project with multiple deploys and I can change values ​​per domain</p>
    </Container>
  )
}

export default Home
