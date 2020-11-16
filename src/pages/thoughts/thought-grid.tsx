import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { BlogPostContentType } from 'src/types'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: repeat(auto-fill, 400px);
  row-gap: 10px;
  column-gap: 10px;
`

const BlockTitle = styled.h1`
    position: absolute;
    color: white;
    margin: 0;
`
const BlockNumber = styled.h1`
    position: absolute;
    color: white;
    font-style: italic;
    font-size: 434px;
    margin: 0;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
`

const Block: FunctionComponent<BlogPostContentType> = ({content}) => {
    const { title, post, image, id } = content
    console.log('title = ', title, image)
    return (
        <div>
            <BlockNumber>
                {id}
            </BlockNumber>
            <BlockTitle>
                {title}
            </BlockTitle>
            <Image src={`./sunset.jpg`} alt="Logo" />
            <img src='./woods.jpg' width="100px" height="100px"/>
        </div>
    )
}


interface ThoughtGridProps {
    contents: BlogPostContentType[]
}

export const ThoughtGrid: FunctionComponent<ThoughtGridProps> = ({contents}) => {
    const blocks = contents.map((content) => <Block content={content} key={content.id}/>)

    return (
        <Grid >
            {blocks}
        </Grid>
    )
}
