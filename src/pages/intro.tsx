import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { Header } from 'src/components/header'
import { Widths } from 'src/styles/widths'
import YAMLData from '../../content/intro.yaml'

export const query = graphql`
  query introImagesQuery {
    allContentYaml {
      edges {
        node {
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 160px;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    padding: 20px 80px;
  }

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    padding: 20px 20px;
  }
`
const Paper = styled.div`
  background-color: #f4f4f4;
  align-self: center;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%:
`

const ImageLayout = styled.div`
  display: grid;
  grid-template-rows: 350px;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`

const Text = styled.span`
  color: black;
  font-family: monospace;
  font-size: 16px;
  line-height: 26px;
`
const Title = styled.h1`
  font-size: 32px;
  font-family: monospace;
  font-weight: 500;
  margin: 0 0 10px 0;
  position: absolute;
  z-index: 1;
  color: white;
`

const IntroPage = ({ data }) => {
  const images = data.allContentYaml.edges[0].node.images
  const { title, sections } = YAMLData

  return (
    <div>
      <Global
        styles={css`
          html {
            color: ${Colors.Green500};
            background-color: ${Colors.White};
          }
        `}
      />
      <Header linkColor={Colors.Green500} />
      <Container>
        <Title>{title}</Title>
        <ImageLayout>
          <Img fluid={images[1].childImageSharp.fluid} />
          <Img fluid={images[0].childImageSharp.fluid} />
        </ImageLayout>
        {sections.map(({ content }) => (
          <Paper>
            <Text>{content}</Text>
          </Paper>
        ))}
        <Paper>
          <Text>- Amy from the back of Taco (pictured above)</Text>
        </Paper>
      </Container>
    </div>
  )
}

export default IntroPage
