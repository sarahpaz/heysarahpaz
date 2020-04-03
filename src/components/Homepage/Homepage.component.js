import React from "react"
import "./Homepage.styles.scss"
import Section from "../Section/Section.component"
import Hero from "../Hero/Hero.component"
import About from "../About/About.component"
import Blog from "../Blog/Blog.component"
import Experience from "../Experience/Experience.component"

export default () => {
  return (
    <div>
      <Hero />
      <Section>
        <About colorClass='about-container' id='about' />
      </Section>
      <Section colorClass='blog-container' id='blog'>
        <Blog />
      </Section>
      <Section id="experience" colorClass="experience-container">
        <Experience />
      </Section>
    </div>
  )
}
