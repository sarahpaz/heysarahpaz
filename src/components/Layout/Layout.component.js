import React from "react"
import layoutStyles from "./Layout.module.scss"
import Header from "../Header/Header.component"
import Footer from "../Footer/Footer.component"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
