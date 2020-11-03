import React from 'react'
import styled from '@emotion/styled'
import { BottomAvo, TopAvo, InnerLayer, Pit,  LeftEye, RightEye, EyeBall, Shadow, Smile } from './avo.styled'

const Container = styled.div`
  display: flex;
  width: 200px;
  height: 220px;
  position: relative;
  justify-content: center;
`

export const Avocado = () => {
  return (
    <Container>
      <TopAvo/>
      <BottomAvo />
      <InnerLayer/>
      <Pit />
      <RightEye>
          <EyeBall/>
      </RightEye>

      <LeftEye>
          <EyeBall/>
      </LeftEye>

      <Smile />
      <Shadow />
      
    </Container>
  )
}
