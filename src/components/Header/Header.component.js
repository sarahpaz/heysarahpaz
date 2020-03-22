import React from "react"
import headerStyles from "./Header.module.scss"
import Nav from "../Nav/Nav.component"

const Header = () => {
  return (
    <header className={headerStyles.container}>
      <h1>heysarahpaz.</h1>
      <Nav />
    </header>
  )
}

export default Header
