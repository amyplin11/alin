import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Colors } from 'src/styles/colors'
import { PageContainer } from 'src/components/page-container'
import { Container, Paper, Picture, RowImageLayout } from 'src/components/layouts.styled'
import { Sources } from 'src/components/sources'
import { NavigationLinks } from 'src/components/navigation-links'
import { Text } from 'src/components/text'

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
            fluid {
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

const Title = styled.h1`
  display: flex;
  align-self: center;
  font-size: 32px;
  font-family: monospace;
  font-weight: 500;
  position: absolute;
  z-index: 1;
  color: white;
`

const Caption = styled.p`
  font-family: monospace;
  color: black;
  text-align: center;
  font-size: 16px;
`

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { images, title, date, sources } = post.frontmatter
  const htmlSections = post.htmlAst.children.filter(section => section.type === 'element')
  const startSections = htmlSections.slice(0, 2)
  const endSections = htmlSections.slice(2)

  const { prev, next } = pageContext

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
        <Picture>
          <Img fluid={images[0].childImageSharp.fluid} style={{ width: '100%', height: '100%' }} />
        </Picture>
        <p>{date}</p>
        {startSections.map(section => {
          return (
            <Paper>
              <Text>{section.children[0].value}</Text>
            </Paper>
          )
        })}
        <RowImageLayout>
          <Img fluid={images[1].childImageSharp.fluid} />
          <Img fluid={images[2].childImageSharp.fluid} />
        </RowImageLayout>

        {endSections.map(section => {
          return (
            <Paper>
              <Text>{section.children[0].value}</Text>
            </Paper>
          )
        })}
        <RowImageLayout>
          <Img fluid={images[3].childImageSharp.fluid} />
          <Img fluid={images[4].childImageSharp.fluid} />
        </RowImageLayout>
        <Caption>[Found alongside Mill Creek Road]</Caption>
        <RowImageLayout>
          <Img fluid={images[5].childImageSharp.fluid} />
          <Img fluid={images[6].childImageSharp.fluid} />
        </RowImageLayout>

        <Sources sources={sources} />

        <NavigationLinks prev={prev} next={next} />
      </Container>
    </PageContainer>
  )
}
