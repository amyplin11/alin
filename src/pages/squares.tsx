import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { Widths } from 'src/styles/widths'

export const query = graphql`
  query squareImagesQuery {
    allSquaresYaml {
      edges {
        node {
          sandImages {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          dailyImages {
            info
            title
            image {
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
  }
`

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const ImageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 10px;
  margin-bottom: 40px;
  padding: 20px;
`

const ImageLayover = styled.div`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;

  ${ImageContainer}:hover & {
    opacity: 0.6;
  }
`

const LayoverTextContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`

const LayoverText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1;
  transition: 0.5s ease;
  width: 100%;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`

const Number = styled.span`
  font-size: 60px;
  text-transform: uppercase;
`

const SectionTitle = styled.div`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
  color: black;
`

const SquaresPage = ({ data }) => {
  const sandImages = data.allSquaresYaml.edges[0].node.sandImages
  const dailyImages = data.allSquaresYaml.edges[1].node.dailyImages

  return (
    <PageContainer linkColor={Colors.Green500}>
      <Global
        styles={css`
          html {
            color: ${Colors.Green500};
            background-color: ${Colors.White};
          }
        `}
      />
      <SectionTitle>Daily Slice</SectionTitle>

      <ImageLayout>
        {dailyImages.map(({ info, title, image }) => (
          <ImageContainer key={title}>
            <LayoverText>
              <Number>{title}</Number>
              {info}
            </LayoverText>
            <ImageLayover>
              <Img fluid={image.childImageSharp.fluid} />
            </ImageLayover>
            <LayoverTextContainer></LayoverTextContainer>
          </ImageContainer>
        ))}
      </ImageLayout>
    </PageContainer>
  )
}

export default SquaresPage
