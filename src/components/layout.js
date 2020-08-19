/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 *
 *  sizes(maxWidth: 10, maxHeight: 10, quality: 100) {
              ...GatsbyContentfulSizes_withWebp
            }
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulNavbar {
      edges {
        node {
          navIcon {
            title
            file{
              url
            }
          }
          navItems {
            items
          }
        }
      }
    }
  }
  `)

  return (
    <>
      {console.log(data.allContentfulNavbar.edges[0])}
      <Header siteTitle={'Webstacks Jr Front End Dev Take Home'} icon={data.allContentfulNavbar.edges[0].node.navIcon.sizes || data.allContentfulNavbar.edges[0].node.navIcon.file.url} navItems={data.allContentfulNavbar.edges[0].node.navItems.items}/>
      <div style={{ margin: `0 auto`,maxWidth: 960,padding: `0 1.0875rem 1.45rem`,}}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
