import React, { Component } from "react"

import "./Section.module.scss"

export default props => {
  const className = `section ${props.colorClass}`
  return (
    <div id={props.id} className={className}>
      <div className="max-width">{props.children}</div>
    </div>
  )
}
