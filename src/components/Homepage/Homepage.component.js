import React from "react"
import Section from "../Section/Section.component"
import Hero from "../Hero/Hero.component"
import About from "../About/About.component"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Section>
        <About />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <About />
      </Section>
    </div>
  )
}

export default Homepage
