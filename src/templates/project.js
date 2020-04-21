import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import SEO from "../components/seo"
const Template = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title}
                description={`${post.frontmatter.description} Logan Anderson complete this project.`}
            />
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
                <p>Code is available on GitHub <a target="_blank" rel="noopener noreferrer" href={post.frontmatter.gitLink} >here</a> </p>
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
                gitLink
                description
            }
        }
    }
`

export default Template
