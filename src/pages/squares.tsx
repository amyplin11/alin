import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
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

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 40px;
  }
`

const DescriptionText = styled.p`
  color: black;
`
const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SquaresPage = ({ data }) => {
  const dailyImages = data.allSquaresYaml.edges[1].node.dailyImages
  const videoSrcURL = 'https://www.youtube.com/embed/lXLD2RPrp6A'
  const videoTitle = 'ROAD TRIP 2020'

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
        <VideoContainer>
          <iframe
            width="590"
            height="345"
            src={videoSrcURL}
            title={videoTitle}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoContainer>

        <Description>
          <DescriptionText>
            At the end of the year in 2020, I took a little road trip from San Jose, California to Miami, Florida and
            back.
          </DescriptionText>
          <DescriptionText>Here's a snap a day during those 5 weeks:</DescriptionText>
        </Description>

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
