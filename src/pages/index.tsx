import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { Global, css, keyframes } from '@emotion/core'
import { DoubleRightOutlined, PlusCircleOutlined } from '@ant-design/icons'

import { PageContainer } from 'src/components/page-container'
import { Avocado, Blueberry } from 'src/components/fruits'
import { Colors } from 'src/styles/colors'
import { Widths } from 'src/styles/widths'

const Body = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-items: center;
  background-color: ${Colors.Green100};
  height: 100%;

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
  padding: 20px 50px;
  margin: 30px 0;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 50px;
    padding: 0;
    margin-top: 40px;
    margin-left: 170px;
  }
`

const FruitsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin: 30px 0;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    margin: 0px;
  }
`

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const WelcomeText = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 60px;
`

const DescriptiveText = styled.p`
  font-weight: 400;
  font-size: 22px;
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

const IconButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  justify-self: flex-start;
  transition: transform 2s;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
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

const ShiftContainer = styled.div`
  display: flex;
  animation: ${({ shouldAnimate = false }: { shouldAnimate?: boolean }) =>
    shouldAnimate
      ? css`
          ${shift} 3s
        `
      : 'none'};
`

const SpeechBubble = styled.div`
  align-self: flex-end;
  padding-right: 50px;
`

const SpeechBubbleText = styled.p`
  transform: rotate(15deg);
  animation: ${fadein} 2s;
`

export default function Home() {
  const [showBlueberry, setShowBlueberry] = useState(false)

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
          <WelcomeText>Hello.</WelcomeText>
          <DescriptiveText>Thanks for joining me. Take a peek at what I've been pondering</DescriptiveText>
          <LinkButton to="/thoughts">
            THOUGHTS
            <DoubleRightOutlined />
          </LinkButton>
        </LeftContainer>
        <MiddleContainer>
          <SpeechBubble>
            {showBlueberry ? (
              <SpeechBubbleText>sup!</SpeechBubbleText>
            ) : (
              <IconButton
                onClick={() => setShowBlueberry(true)}
                style={{ color: 'white', fontWeight: 'bold', fontSize: '26px' }}
              >
                <PlusCircleOutlined />
              </IconButton>
            )}
          </SpeechBubble>

          <FruitsContainer>
            <ShiftContainer shouldAnimate={showBlueberry}>
              <Avocado />
            </ShiftContainer>
            <Blueberry shouldAnimate={showBlueberry} />
          </FruitsContainer>
        </MiddleContainer>
      </Body>
    </PageContainer>
  )
}
