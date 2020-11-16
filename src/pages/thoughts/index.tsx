import React from 'react'
import styled from '@emotion/styled'

import { ThoughtGrid } from './thought-grid'
import { TypeText } from '../../components/test'
import { Header } from '../../components/header'
import JSONData from '../../../content/data.json'
import { Colors } from 'src/styles/colors'
import { BlogPostType } from 'src/types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  background-color: #b2d1c6;
`
console.log('json = ', JSONData)


const contents: BlogPostType[] = JSONData.contents

export default function Thoughts() {
  return (
    <Container>
      <Header linkColor={Colors.White}/>
      <TypeText />
      <ThoughtGrid contents={contents}/>

    </Container>
  )
}
