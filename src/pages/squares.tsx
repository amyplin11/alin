import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { Header } from 'src/components/header'
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 160px;
  min-width: 320px;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    padding: 0 80px;
  }

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    padding: 0 20px;
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
`
const Title = styled.h1`
  position: absolute;
  font-size: 20px;
  z-index: 1;
  left: 227px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: white;

  @media only screen and (max-width: ${Widths.ExtraSmallScreen}px) {
    left: 26px;
  }
`

const DoubleImage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(297px, 2fr));
  gap: 10px;
  padding: 70px 80px;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    padding: 70px 0;
  }
`

const PaddedRightImage = styled.div`
  padding-bottom: 40px;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    padding: 0;
  }
`

const PaddedLeftImage = styled.div`
  padding-top: 40px;

  @media only screen and (max-width: ${Widths.MediumScreen}px) {
    padding: 0;
  }
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
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 40px;
`

const SquaresPage = ({ data }) => {
  const sandImages = data.allSquaresYaml.edges[0].node.sandImages
  const dailyImages = data.allSquaresYaml.edges[1].node.dailyImages

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
        <DoubleImage>
          <Title>GREAT SAND DUNES, CO</Title>
          <PaddedRightImage>
            <Img fluid={sandImages[0].image.childImageSharp.fluid} style={{ minHeight: '500px' }} />
          </PaddedRightImage>
          <PaddedLeftImage>
            <Img fluid={sandImages[1].image.childImageSharp.fluid} style={{ minHeight: '500px' }} />
          </PaddedLeftImage>
        </DoubleImage>

        <Img fluid={sandImages[4].image.childImageSharp.fluid} style={{ maxHeight: '400px' }} />

        <SectionTitle>A pic a day</SectionTitle>

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
      </Container>
    </div>
  )
}

export default SquaresPage
