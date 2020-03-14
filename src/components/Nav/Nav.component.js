import React from "react"
import "./Nav.styles.css"
import { AppBar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const Nav = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" color="inherit">
            heysarahpaz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
