import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#999",
  },
}))

const Section = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>{props.children}</div>
    </div>
  )
}

export default Section
