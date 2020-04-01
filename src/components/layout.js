import React from "react"

import Header from "./header"

const Layout = ({ children, location: { pathname } }) => {
  return (
    <div
      className="flex-column"
      style={{
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Header page={pathname.replace(/\//g, "")} />
      {children}
    </div>
  )
}

export default Layout
