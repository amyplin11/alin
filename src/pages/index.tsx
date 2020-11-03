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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  height: 90vh;
  align-items: center;
`

const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 160px;
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction; column;
`

const WelcomeText = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 100px;
  color: ${Colors.Green500}
`

const DescriptiveText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${Colors.Green500}
`

console.log('json = ', JSONData)

export default function Home() {
  return (
    <Container>
      <Header />
      <Body>

      <RightContainer>
        <WelcomeText>
          So it goes.
        </WelcomeText>
        <DescriptiveText>
          Hi, I'm Amy. I'm currently spending some time thinking about and exploring topics that are important to me.
          I'm hoping to document my learnings here so please feel free to stop by from time to time.
        </DescriptiveText>
      </RightContainer>
      <LeftContainer>
        <Avocado />
      </LeftContainer>
      </Body>

    </Container>
  )
}
