/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import { withPlugin } from 'tinacms'

// import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import "./layout.css"
import Menu from './menu'

const Layout = (props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <Menu />
      {props.Top}
      <div>
        <Container>
          <main>{props.children}</main>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'New Project',
  fields: [
    {
      name: 'title',
      component: 'text',
      label: 'Title',
      placeholder: 'Title of project',
      description:
        'Title of project',
    },
    {
      name: 'description',
      component: 'text',
      label: 'Description',
      placeholder: 'A little bit about the project',
      description:
        'A little bit about the project',
    },
    {
      name: 'gitLink',
      component: 'text',
      label: 'Git Link',
      placeholder: 'https://github.com/logan-anderson/LoganAnderson_site',
      description:
        'The link to github',
    },


  ],
  filename: form => {
    let slug = form.title.replace(/\s+/, '-').toLowerCase()
    return `src/pages/projects-all/${slug}/index.md`
  },
  frontmatter: form => ({
    title: form.title,
    date: new Date(),
    gitLink: form.gitLink,
    description: form.description,
    path: '/' + form.title.replace(/\s+/, '-').toLowerCase(),
    author: 'Logan Anderson'

  }),
  body: form => `This is a new blog post. Please write some content.`,
})
export default withPlugin(Layout, CreatePostPlugin)
