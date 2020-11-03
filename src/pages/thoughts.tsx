import React from 'react'
import styled from '@emotion/styled'

import { TypeText } from '../components/test'
import { Header } from '../components/header'
import {Flower} from '../components/flower'
import JSONData from '../../content/data.json'

import LeafSvg from '../../static/leaf.svg'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`
console.log('json = ', JSONData)

export default function Home() {
  return (
    <Container>
      <Header />

     welcome

    </Container>
  )
}
