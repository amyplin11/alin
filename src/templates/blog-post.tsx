import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { Widths } from 'src/styles/widths'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        images {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
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
  padding: 20px 20px;
  min-width: 320px;

  @media only screen and (min-width: ${Widths.SmallScreen}px) {
    padding: 20px 80px;
  }

  @media only screen and (min-width: ${Widths.MediumScreen}px) {
    padding: 20px 160px;
  }
`

const Paper = styled.div`
  background-color: #f4f4f4;
  align-self: center;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
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

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const htmlSections = post.htmlAst.children.filter(section => section.type === 'element')

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
      <Container>
        <Title>{post.frontmatter.title}</Title>
        <ImageLayout>
          <Img fluid={post.frontmatter.images[0].childImageSharp.fluid} />
          <Img fluid={post.frontmatter.images[1].childImageSharp.fluid} />
        </ImageLayout>

        {htmlSections.map(section => {
          return (
            <Paper>
              <Text>{section.children[0].value}</Text>
            </Paper>
          )
        })}
      </Container>
    </PageContainer>
  )
}
