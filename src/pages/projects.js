import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="projects" />
    <Breadcrumb id="no-background">
      <Breadcrumb.Item href="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item active href="/projects">
        Projects
     </Breadcrumb.Item>
    </Breadcrumb>
    <h1 class="mb-3">
      My Projects
    </h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>
          {post.node.frontmatter.title}
        </h3>
        <small>Updated {post.node.frontmatter.date} </small>
        <p>{post.node.frontmatter.description} </p>
        <Button variant="outline-primary" href={post.node.frontmatter.path}  >See More</Button>
        <hr />
      </div>
    ))}
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
                    description
                  }
                }
              }
            }
          }
          
`
export default ProjectsPage
