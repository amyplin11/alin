import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { InstagramOutlined } from '@ant-design/icons'

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const ButtonLink = styled.a``

interface MenuProps {
  linkColor: string
}

export const TemporaryMenu: FunctionComponent<MenuProps> = ({ linkColor }) => (
  <MenuList>
    <ButtonLink href="https://www.instagram.com/lildabbler/" target="_blank">
      <InstagramOutlined style={{ color: linkColor, fontWeight: 'bold', fontSize: '26px' }} />
    </ButtonLink>
  </MenuList>
)
