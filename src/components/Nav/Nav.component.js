import React from "react"
import "./Nav.styles.css"
import { Link } from "gatsby-theme-material-ui"
import Typography from "@material-ui/core/Typography"

const Nav = () => {
  return (
    <div>
      Hi
      <Typography>
        Check out my <Link to="/blog">blog</Link>!
      </Typography>
    </div>
  )
}

export default Nav
