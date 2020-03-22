import React from "react"
import "./Nav.styles.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <AnchorLink to="/#about" tite="About">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#blog">Blog</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#experience">Experience</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contact">Contact</AnchorLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
