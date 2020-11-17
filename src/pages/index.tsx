import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { Global, css } from '@emotion/core'

import { TypeText } from '../components/test'
import { Header } from '../components/header'
import { Avocado } from '../components/fruits'
import { Colors } from '../styles/colors'
import { Widths } from '../styles/widths'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b2d1c6;
  min-width: 320px;
`

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  background-color: ${Colors.Green350};
  height: 90vh;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    grid-template-columns: auto;
  }
`
// background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);

const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px;
  margin-left: 80px;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    padding: 0;
  }

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    padding: 20px;
    margin-top: 40px;
    margin-left: 0;
  }
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction; column;

  @media only screen and (max-width: ${Widths.SmallScreen}px) {
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

const LinkButton = styled(GatsbyLink)`
  border: 1px solid white;
  color: white;
  background-color: transparent;
  padding: 6px;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`

export default function Home() {
  return (
    <Container>
      <Global
        styles={css`
          html {
            color: white;
            background-color: ${Colors.Green350};
          }
        `}
      />
      <Header linkColor={Colors.White} />
      <Body>
        <LeftContainer>
          <WelcomeText>Hello.</WelcomeText>
          <DescriptiveText>Thanks for joining me. Take a peek at what I've been pondering</DescriptiveText>
          <LinkButton to="/intro">FIRST POST</LinkButton>
        </LeftContainer>
        <MiddleContainer>
          <Avocado />
        </MiddleContainer>
      </Body>
    </Container>
  )
}
