import React from 'react'
import styled from '@emotion/styled'

import { Colors } from 'src/styles/colors'
import { Text } from 'src/components/text'

const Link = styled.a`
  margin: 0;
  text-decoration: none;
  color: ${Colors.Blue500};
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  word-break: break-word;

  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`

const ListItem = styled.li`
  margin: 10px;
  list-style-type: none;
  text-decoration: none;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
`

const Container = styled.div`
  margin: 20px 0px;
`

const BoldText = styled(Text)`
  font-weight: 600;
`

export const Sources = ({ sources }) => (
  <Container>
    <BoldText>Sources:</BoldText>

    <List>
      {sources.map(({ title, href }) => (
        <ListItem>
          <Link target="_blank" href={href}>
            {title} ({href})
          </Link>
        </ListItem>
      ))}
    </List>
  </Container>
)
