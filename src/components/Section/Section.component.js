import React, { Component } from "react"
// import Container from "@material-ui/core/Container"

class Section extends Component {
  render() {
    return (
      <div>
        {/* <Container> */}
        <div>{this.props.children}</div>
        {/* </Container> */}
      </div>
    )
  }
}

export default Section
