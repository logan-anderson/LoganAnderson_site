/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './part-test'

import Alert from './alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Header from "./header"
import "./layout.css"
import Menu from './menu'

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [show, setShow] = useState(true);
  return (
    <>
     
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Menu />
        {/* <Test>
      </Test> */}
        <Alert />
        {props.Top}
        <div>
          <Container>
            <main>{props.children}</main>
          </Container>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      {/* </Test> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
