import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

import { Menu } from './menu'
import { Widths } from '../../styles/widths'
import MakersMarkWhite from '../../../static/makers-mark-white.svg'
import MakersMarkGreen from '../../../static/makers-mark-green.svg'
import { Colors } from '../../styles/colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding-bottom: 40px;
  background-color: ${({ backgroundColor }: ResponsiveMenuState) => backgroundColor};
  overflow: ${({ isMenuOpen }: ResponsiveMenuState) => (isMenuOpen ? 'hidden' : 'scroll')};
  position: ${({ isMenuOpen }: ResponsiveMenuState) => (isMenuOpen ? 'fixed' : '')};
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 4px 30px;
  min-width: 320px;
  z-index: 5;
`

const NameContainer = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    font-size: 46px;
  }
`

const IconButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-self: flex-end;
  transition: transform 2s;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    display: none;
  }
`

const HorizontalLinksContainer = styled.div`
  display: none;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    display: flex;
  }
`

interface ResponsiveMenuState {
  isMenuOpen: boolean
  backgroundColor: string
}

const ResponsiveLinksContainer = styled.nav`
  list-style-type: none;
  position: fixed;
  width: 100%;
  z-index: 4;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
  background-color: ${(props: ResponsiveMenuState) => props.backgroundColor};
  visibility: ${(props: ResponsiveMenuState) => (props.isMenuOpen ? 'visible' : 'hidden')};
`

interface HeaderProps {
  linkColor: string
}

export const PageContainer: FunctionComponent<HeaderProps> = ({ linkColor, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const backgroundColor = linkColor === Colors.White ? Colors.Green350 : Colors.White

  return (
    <Container backgroundColor={backgroundColor} isMenuOpen={isMenuOpen}>
      <Header>
        {linkColor === Colors.White ? <MakersMarkWhite /> : <MakersMarkGreen />}

        <NameContainer>amy lin</NameContainer>

        <IconButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          {isMenuOpen ? (
            <CloseOutlined style={{ color: linkColor, fontWeight: 'bold', fontSize: '26px' }} />
          ) : (
            <MenuOutlined style={{ color: linkColor, fontWeight: 'bold', fontSize: '26px' }} />
          )}
        </IconButton>

        <HorizontalLinksContainer>
          <Menu linkColor={linkColor} />
        </HorizontalLinksContainer>
      </Header>

      <ResponsiveLinksContainer backgroundColor={backgroundColor} isMenuOpen={isMenuOpen}>
        <Menu linkColor={linkColor} />
      </ResponsiveLinksContainer>

      {children}
    </Container>
  )
}