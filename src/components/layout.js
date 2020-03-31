import React from "react"

import { useStaticQuery, graphql } from "gatsby"



import Header from "./header"
import Footer from "./whitedrop/footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
        {children}
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>

    </>
  )
}



export default Layout
