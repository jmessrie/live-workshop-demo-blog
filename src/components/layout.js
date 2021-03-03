import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  return (
    <main className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{data.site.siteMetadata.title}</h1>
      {children}
    </main>
  )
}

export default Layout