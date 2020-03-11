import React from "react"
import "./HomePage.styles.css"

import { Link } from "gatsby"

const HomePage = ({ to }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default HomePage
