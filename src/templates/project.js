import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby';
import Layout from "../components/layout"

const Template = ({ data }) => {
    const post = data.markdownRemark;


    return (
        <Layout>
            <div>
                <Link to="/projects">Go Back</Link>
                <hr />
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>

    )
}
export const postQuery = graphql`
    query PostByPath($path: String!){
        markdownRemark(frontmatter: { path: {eq: $path}}){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

export default Template
