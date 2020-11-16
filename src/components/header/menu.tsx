import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink} from 'gatsby'
import { MenuOutlined } from '@ant-design/icons';

import { Colors } from '../../styles/colors'
import { Widths } from '../../styles/widths'


const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${(props: MenuProps) => props.linkColor};

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    font-size: 14px;
  }
`

const IconButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 2s;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`

const MenuItem = styled.div`
  width: 60px;
  height: 28px;
  
  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`
interface MenuState {
    isOpen: boolean
}

const MenuContent = styled.div`
    display: ${(props: MenuState) => props.isOpen ? 'block' : 'none'};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`

const DropdownMenu = styled.div`
    position: relative;
    display: inline-block;
`

const LinkStyle = {
  "textDecoration": "underline",
}

interface MenuProps {
  linkColor: string;
}


export const Menu: FunctionComponent<MenuProps>= ({ linkColor }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <LinksContainer>

        {/* <DropdownMenu>
            <IconButton onClick={() => setIsOpen(true)}>
                <MenuOutlined style={{ color: 'white', fontSize: '20px' }}/>
            </IconButton>
            <MenuContent isOpen={isOpen}>
                <MenuItem>
                    <Link to="/" activeStyle={LinkStyle}>home</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/thoughts" activeStyle={LinkStyle}>thoughts</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/intro" activeStyle={LinkStyle}>intro</Link>
                </MenuItem>
            </MenuContent>
        </DropdownMenu> */}

        <Link linkColor={linkColor} to="/" activeStyle={LinkStyle}>home</Link>
        {/* <Link linkColor={linkColor}  to="/thoughts" activeStyle={LinkStyle}>thoughts</Link> */}
        <Link linkColor={linkColor}  to="/intro" activeStyle={LinkStyle}>intro</Link>
    </LinksContainer>
  )
}
