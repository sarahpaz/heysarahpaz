import React from "react"
import headerStyles from "./Header.module.scss"
import Nav from "../Nav/Nav.component"

const Header = () => {
  return (
    <header className={headerStyles.container}>
      <Nav></Nav>
    </header>
  )
}

export default Header
