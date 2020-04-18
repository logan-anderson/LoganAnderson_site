import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="projects" />
    <h1>My Projects</h1>
    {data.allMarkdownRemark.edges.map( post=> (
        <div key={ post.node.id }> 
            <h3>
                {post.node.frontmatter.title}
            </h3>
    <small>Posted by {post.node.frontmatter.author} {post.node.frontmatter.date} </small>
        <br/>
        <br/>
        <Link to={post.node.frontmatter.path }>ReadMore</Link>
        <br/>
        <br/>
        <hr/>
        </div>
    ) ) }
  </Layout>
)

export const pageQuery = graphql`
    query projectIndexQuery{
        
            allMarkdownRemark {
              edges {
                node {
                id
                  frontmatter {
                    title
                    path
                    date
                    author
                  }
                }
              }
            }
          }
          
`
export default ProjectsPage
