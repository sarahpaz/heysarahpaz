import React from "react"
import "./Blog.styles.scss"
import Container from "@material-ui/core/Container"

const Blog = () => {
  return (
    <div id="blog" className="blog-container">
      <Container>
        <h2>Title</h2>
        <p>Description</p>
        <h2>Title</h2>
        <p>Description</p>
        <h2>Title</h2>
        <p>Description</p>
      </Container>
    </div>
  )
}

export default Blog
