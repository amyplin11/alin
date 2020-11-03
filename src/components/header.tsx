import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink} from 'gatsby'
import { Colors } from '../styles/colors'
import LeafSvg from '../../static/leaf.svg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${Colors.Gray100}
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const NameContainer = styled.div`
  display: flex;
  font-size: 46px;
  justify-content: center;
  color: ${Colors.Green500};
`


const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${Colors.Green500};
  transition: 0.3s;

  &:hover {
    color: ${Colors.Green300};
  }
`

export const Header = () => {
  return (
    <Container>
      <LeafSvg color={Colors.Green500}/>

      <NameContainer>
        amy lin
      </NameContainer>

      <LinksContainer>
        <Link to="/">home</Link>
        <Link to="/thoughts">thoughts</Link>
      </LinksContainer>
    </Container>
  )
}
