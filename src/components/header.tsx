import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink} from 'gatsby'
import { Colors } from '../styles/colors'
import MakersMark from '../../static/makers-mark.svg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  background-color: ${Colors.Green350}
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const NameContainer = styled.div`
  display: flex;
  font-size: 46px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`


const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const LinkStyle = {
  "text-decoration": "underline",
}

export const Header = () => {
  return (
    <Container>
      <MakersMark />

      <NameContainer>
        amy lin
      </NameContainer>

      <LinksContainer>
        <Link to="/" activeStyle={LinkStyle}>home</Link>
        <Link to="/thoughts" activeStyle={LinkStyle}>thoughts</Link>
        <Link to="/intro" activeStyle={LinkStyle}>intro</Link>
      </LinksContainer>
    </Container>
  )
}
