import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { graphql } from 'gatsby'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { Container, Paper, RowImageLayout } from 'src/components/layouts.styled'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
        sources {
          title
          href
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
  font-size: 40px;
  font-family: monospace;
  font-weight: 500;
  color: black;
  z-index: 1;
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  console.log('post= ', post)
  const { title, sources } = post.frontmatter

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
        <Title>{title}</Title>
        {/* <RowImageLayout>
          <Img fluid={post.frontmatter.images[0].childImageSharp.fluid} />
          <Img fluid={post.frontmatter.images[1].childImageSharp.fluid} />
        </RowImageLayout> */}

        <Paper>
          <Text dangerouslySetInnerHTML={{ __html: post.html }} />
        </Paper>

        <Text>Sources:</Text>
        {sources.map(({ title, href }) => (
          <p>
            <a target="_blank" href={href}>
              {title} [{href}]
            </a>
          </p>
        ))}
      </Container>
    </PageContainer>
  )
}
