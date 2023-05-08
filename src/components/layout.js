import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}> {/* To apply classes to React components, use the className prop */}
      <title>{pageTitle} | {data.site.siteMetadata.title}</title> {/* what is shown in the browser's tab */}
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}> {/* bulleted list */}
          <li className={navLinkItem}> {/* one item in the list */}
            <Link to="/" className={navLinkText}>
              Home
            </Link> 
          </li> 
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children} {/* children is whatever element is between the opening 
                        and the closing tag of Layout */}
      </main>
    </div>
  )
}

export default Layout