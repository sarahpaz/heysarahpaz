import React from "react"
import "./HomePage.styles.css"
import { Button } from "@material-ui/core"
const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>About</div>
      <div>Blog</div>
      <div>Experience</div>
      <div>Contact</div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}

export default HomePage
