import React from "react"
import "./HomePage.styles.css"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>About</div>
      <div>Blog</div>
      <div>Experience</div>
      <Button>Contact</Button>
    </div>
  )
}

export default HomePage
