import React, { FunctionComponent, useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'

import { Widths } from '../../styles/widths'

const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${(props: MenuProps) => props.linkColor};
`

const MenuItem = styled.li`
  text-align: center;
  padding: 10px;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 0;
  }
`

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`

const LinkStyle = {
  textDecoration: 'underline',
}

interface MenuProps {
  linkColor: string
}

export const Menu = ({ linkColor }) => (
  <MenuList>
    <MenuItem>
      <Link to="/" linkColor={linkColor} activeStyle={LinkStyle}>
        home
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/thoughts" linkColor={linkColor} activeStyle={LinkStyle}>
        thoughts
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/squares" linkColor={linkColor} activeStyle={LinkStyle}>
        squares
      </Link>
    </MenuItem>
  </MenuList>
)
