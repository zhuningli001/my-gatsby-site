import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
// In CSS, the convention is to name classes using kebab case (like .nav-links). 
//But in JavaScript, the convention is to name variables using camel case (like navLinks).


const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/">Home</Link></li>
            <li><Link to="/about" className={navLinkText}>About</Link></li>
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