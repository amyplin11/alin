import React from 'react'
import styled from '@emotion/styled'

import { jsx, css, keyframes } from '@emotion/core'

const typing = keyframes`
    from {
        width: 0
    }
`;

const blink = keyframes`
    50% {
        border-color: transparent
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const TypingContainer = styled.div`
    width: 22ch;
    animation: ${typing} 2s steps(22), ${blink} .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
`
  
export const TypeText = () =>  {
  return (
      <Container>
          <TypingContainer>
          Food for Thought
          </TypingContainer>
      </Container>


  )
}
