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
`

const Container = styled.div`
  margin-bottom: 40px;
  padding: 20px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 20px 80px;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 20px;

  @media only screen and (min-width: ${Widths.MediumScreen}px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
    opacity: 0.7;
  }
`

const LayoverTextContainer = styled.div`
  transition: 0.5s ease;
  opacity: 1;
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
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1;
  transition: 0.5s ease;
  width: 80%;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`

const Number = styled.span`
  font-size: 40px;
  text-transform: uppercase;
  padding: 10px;
`

const SectionTitle = styled.h2`
  color: ${Colors.Gray400};
`

const SectionDescription = styled.p`
  color: ${Colors.Gray300};
`

const Section = styled.div`
  margin-bottom: 20px;
`

const SquaresPage = ({ data }) => {
  const dailyImages = data.allSquaresYaml.edges[1].node.dailyImages

  return (
    <PageContainer linkColor={Colors.Green500}>
      <Global
        styles={css`
          html {
            color: ${Colors.Gray300};
            background-color: ${Colors.White};
          }
        `}
      />

      <Container>
        <Section>
          <SectionTitle>DAILY SLICE</SectionTitle>
          <SectionDescription>a picture a day on my roadtrip</SectionDescription>
        </Section>

        <Layout>
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
        </Layout>
      </Container>
    </PageContainer>
  )
}

export default SquaresPage
