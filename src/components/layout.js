import React from "react"

import Header from "./header"

const Layout = ({ children, uri }) => (
  <div
    className="flex-column"
    style={{
      width: "100vw",
      alignItems: "center",
    }}
  >
    <Header page={uri.slice(1)} />
    {children}
  </div>
)

export default Layout
