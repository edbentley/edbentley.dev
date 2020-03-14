import "../style.css"
import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"

const BlogPage = () => {
  return (
    <>
      <SEO title="Blog" />
      <div
        className="flex-column"
        style={{
          width: "100vw",
          alignItems: "center",
        }}
      >
        <Header page="blog" />
        <main className="app-width" style={{ marginTop: "8px" }}>
          <p>Coming soon...</p>
        </main>
      </div>
    </>
  )
}

export default BlogPage
