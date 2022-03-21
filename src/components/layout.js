import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'
// In CSS, the convention is to name classes using kebab case (like .nav-links). 
//But in JavaScript, the convention is to name variables using camel case (like navLinks).


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  
  `);
  
  console.log(data)

    return (
      <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          
          <p className={siteTitle}>{data.site.siteMetadata.title}</p>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/">Home</Link></li>
            <li className={navLinkItem}><Link to="/about">About</Link></li>
            <li className={navLinkItem}><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }

  export default Layout