import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Menu } from './menu'
import { Widths } from '../../styles/widths'
import MakersMarkWhite from '../../../static/makers-mark-white.svg'
import MakersMarkGreen from '../../../static/makers-mark-green.svg'
import { Colors } from '../../styles/colors'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px 30px;
  min-width: 320px;
`

const NameContainer = styled.div`
  display: flex;
  font-size: 46px;
  justify-content: center;

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    font-size: 30px;
  }
`

interface HeaderProps {
  linkColor: string
}

export const Header: FunctionComponent<HeaderProps> = ({ linkColor }) => {
  return (
    <Container>
      {linkColor === Colors.White ? <MakersMarkWhite /> : <MakersMarkGreen />}

      <NameContainer>amy lin</NameContainer>

      <Menu linkColor={linkColor} />
    </Container>
  )
}
