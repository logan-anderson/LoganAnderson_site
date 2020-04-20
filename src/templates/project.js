import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
const Template = ({ data }) => {
    const post = data.markdownRemark;


    return (
        <Layout>
            <div>
                <Breadcrumb id="no-background">
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects">
                        Projects
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                            {post.frontmatter.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr />
                {/* <h1>{post.frontmatter.title}</h1> */}
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
