import React from "react"

import SEO from "../components/seo"

const IndexPage = () => (
  <main className="app-width" style={{ marginTop: "8px" }}>
    <SEO title="About" />
    <p>Hi, I'm a software developer in London.</p>
    <p>I'm currently working on some open source projects.</p>
    <p>
      I'm also an indie game developer with titles such as{" "}
      <a href="https://www.flukedude.com/theimpossiblegame">
        The Impossible Game
      </a>
      .
    </p>
  </main>
)

export default IndexPage
