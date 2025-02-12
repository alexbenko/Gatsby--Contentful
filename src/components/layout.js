/**
 * If I had more time I would research gatsby image and fluid to implement lazy loading for the images
 * I know this graphQL query is a start
 * sizes(quality: 100) {
              ...GatsbyContentfulSizes_withWebp
            }
  instead of :

  file{
    url
  }

  and instead of the <img> tag use the gatsby-image package <Img fluid={}>

  for future reference: https://stackoverflow.com/questions/50007271/how-display-a-contentul-image-with-gatsby
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
      <Header siteTitle={'Webstacks Jr Front End Dev Take Home'} icon={data.allContentfulNavbar.edges[0].node.navIcon.sizes || data.allContentfulNavbar.edges[0].node.navIcon.file.url} navItems={data.allContentfulNavbar.edges[0].node.navItems.items}/>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
