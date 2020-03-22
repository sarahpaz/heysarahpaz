import React from "react"
import "./Homepage.styles.scss"
import Section from "../Section/Section.component"
import Hero from "../Hero/Hero.component"
import About from "../About/About.component"
import Blog from "../Blog/Blog.component"
import Experience from "../Experience/Experience.component"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Section>
        <About />
      </Section>
      <Section>
        <Blog />
      </Section>
      <Section>
        <Experience />
      </Section>
    </div>
  )
}

export default Homepage
