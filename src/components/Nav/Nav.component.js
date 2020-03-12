import React from "react"
import "./Nav.styles.css"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div>
      <p>Navbar</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
