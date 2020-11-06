import React from 'react'
import styled from '@emotion/styled'

import { TypeText } from '../components/test'
import { Header } from '../components/header'
import { Avocado } from '../components/fruits'
import JSONData from '../../content/data.json'
import { Colors } from '../styles/colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  background-color: ${Colors.Green350};
  height: 100vh;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`
  // background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);

const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 60px;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction; column;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`

const WelcomeText = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 60px;
`

const DescriptiveText = styled.p`
  font-weight: 400;
  font-size: 26px;
`

console.log('json = ', JSONData)

export default function Home() {
  return (
    <Container>
      <Header />
      <Body>

      <RightContainer>
        <WelcomeText>
          Hello.
        </WelcomeText>
        <DescriptiveText>
          Thanks for joining me.
          Take a peek at what I've been pondering
        </DescriptiveText>
      </RightContainer>
      <MiddleContainer>
        <Avocado />
      </MiddleContainer>
      </Body>

    </Container>
  )
}
