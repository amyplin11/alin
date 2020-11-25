import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { Global, css } from '@emotion/core'

import { TypeText } from '../components/test'
import { PageContainer } from '../components/page-container'
import { Avocado } from '../components/fruits'
import { Colors } from '../styles/colors'
import { Widths } from '../styles/widths'

const Body = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-items: center;
  background-color: ${Colors.Green350};
  height: 100%;
  padding-top: 20px;

  @media only screen and (min-width: ${Widths.ExtraSmallScreen}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${Widths.MediumScreen}px) {
    padding-top: 120px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 50px;
  margin-left: 0;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 50px;
    padding: 0;
    margin-top: 40px;
    margin-left: 170px;
  }
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction; column;
  margin-top: 20px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    margin-top: 0px
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
    <PageContainer linkColor={Colors.White}>
      <Global
        styles={css`
          html {
            color: white;
            background-color: ${Colors.Green350};
          }
        `}
      />

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
    </PageContainer>
  )
}
