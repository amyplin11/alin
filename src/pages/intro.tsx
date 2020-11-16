import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image";

import { Image } from 'src/components/image'
import { Colors } from 'src/styles/colors'
import { Header } from 'src/components/header'
import YAMLData from "../../content/intro.yaml"

export const query = graphql`
  query imagesQuery {
    allContentYaml {
      edges {
        node {
          sections {
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
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 160px;
`
const Paper = styled.div`
  background-color: #F4F4F4;
  align-self: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
`

const ImageLayout = styled.div`
  display: grid;
  grid-template-row: 50px;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const Text = styled.span`
  color: black;
  font-family: monospace;
  font-size: 16px;
  line-height: 26px;
`  
const Title = styled.h1`
  font-size: 40px;
  font-family: monospace;
  font-weight: 500;
  margin: 0 0 10px 0;
  position: absolute;
  z-index: 1;
  color: white;
`

const IntroPage = ({ data }) => {
  const edges = data.allContentYaml.edges[0].node.sections
  console.log('data = ', edges)


  const { title, sections } = YAMLData
  console.log('YAMLData = ', title, sections)
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
      <Header linkColor={Colors.Green500}/>
      <Container>
        <Title>{title}</Title>
        <Img fluid={edges[0].image.childImageSharp.fluid} style={{maxHeight: '400px'}}/>  
        {
          sections.map(({ content }) => (
            <Paper>
              <Text>{content}</Text>
            </Paper>
          ))
        }   
      </Container>
    </div>
  )
}

export default IntroPage
