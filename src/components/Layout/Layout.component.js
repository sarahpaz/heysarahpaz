import React from "react"
import Header from "../Header/Header.component"
import Footer from "../Footer/Footer.component"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
