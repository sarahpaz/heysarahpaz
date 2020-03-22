import React from "react"
// import navStyles from "./Nav.module.scss"
import { makeStyles } from "@material-ui/core/styles"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#999",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Nav = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} position="inherit">
      <ToolBar>
        <IconButton
          edge="start"
          color="inherit"
          className={classes.menuButton}
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          heysarahpaz.
        </Typography>
        <Button color="inherit">
          <AnchorLink to="/#about" tite="About">
            About
          </AnchorLink>
        </Button>
        <Button color="inherit">
          <AnchorLink to="/#blog" tite="Blog">
            Blog
          </AnchorLink>
        </Button>
        <Button color="inherit">
          <AnchorLink to="/#experience" tite="Experience">
            Experience
          </AnchorLink>
        </Button>
        <Button color="inherit">
          <AnchorLink to="/#contact" tite="Contact">
            Contact
          </AnchorLink>
        </Button>
      </ToolBar>
    </AppBar>
  )
}

export default Nav
