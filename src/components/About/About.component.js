import React from "react"
import "./About.styles.css"
import Grid from "@material-ui/core/grid"

const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <div>
          Full Stack Web Developer with5+ years E-Commerce experienceand a
          background in Marketing.Extremely motivated and alwayslearning.
          Passionate problem solverand creative thinker ready to take onany
          challenge.
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div>
          <img src="https://www.placehold.it/300x300" alt="Headshot"></img>
        </div>
      </Grid>
    </Grid>
  )
}

export default About
