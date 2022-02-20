import React from 'react'
import styled from '@emotion/styled'
import { Global, css, keyframes } from '@emotion/react'

import { PageContainer } from 'src/components/page-container'
import { Avocado, Blueberry } from 'src/components/fruits'
import { Colors } from 'src/styles/colors'
import { Widths } from 'src/styles/widths'

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Green100};
  height: 100%;
  min-width: 300px;
  flex-direction: column;

  @media only screen and (min-width: ${Widths.ExtraSmallScreen}px) {
    flex-direction: row;
  }
`

const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px;
`

const FruitsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;

  @media only screen and (min-width: ${Widths.ExtraSmallScreen}px) {
    font-size: 40px;
    padding: 0px;
  }
`

const WelcomeText = styled.h2`
  font-weight: bold;
  margin: 0;
  font-size: 30px;
  overflow-wrap: normal;
  max-width: 400px;

  @media only screen and (min-width: ${Widths.ExtraSmallScreen}px) {
    font-size: 40px;
  }

  @media only screen and (min-width: ${Widths.MediumScreen}px) {
    font-size: 50px;
  }
`

const DescriptionText = styled.p`
  max-width: 400px;
  font-size: 20px;
`

const shift = keyframes`
    0% {
      transform: translateX(50px);
    }
    50% {
      transform: translateX(-2px);
    }
`

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export default function Home() {
  return (
    <PageContainer linkColor={Colors.White}>
      <Global
        styles={css`
          html {
            color: white;
            background-color: ${Colors.Green100};
          }
        `}
      />

      <Body>
        <LeftContainer>
          <FruitsContainer>
            <Avocado />
            <Blueberry />
          </FruitsContainer>
        </LeftContainer>
        <MiddleContainer>
          <WelcomeText>We are under construction!</WelcomeText>
          <DescriptionText>This has admittedly been a bit neglected but we will be back soon!</DescriptionText>
        </MiddleContainer>
      </Body>
    </PageContainer>
  )
}
