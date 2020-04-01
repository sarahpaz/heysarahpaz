import React from "react"
import "./Hero.styles.scss"
import Container from "@material-ui/core/Container"
const Hero = () => {
  return (
    <div className="hero-container">
      <Container>
        <h1>
          Hey, I'm Sarah Paz. <br />
          Developer. Runner. Traveller.
        </h1>
        <p>
          I’m a web developer with a background in marketing and e-commerce. I
          have a passion for learning, improving the user experience, and
          finding creative solutions to common problems.
        </p>
      </Container>
    </div>
  )
}

export default Hero
