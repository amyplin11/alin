import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { Container, Paper, RowImageLayout } from 'src/components/layouts.styled'

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
        <RowImageLayout>
          <Img fluid={post.frontmatter.images[0].childImageSharp.fluid} />
          <Img fluid={post.frontmatter.images[1].childImageSharp.fluid} />
        </RowImageLayout>

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
