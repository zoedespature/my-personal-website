import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}> {/* To apply classes to React components, use the className prop */}
      <title>{pageTitle}</title> {/* what is shown in the browser's tab */}
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