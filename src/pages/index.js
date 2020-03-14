import "../style.css"
import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="About" />
    <div
      className="flex-column"
      style={{
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Header page="about" />
      <main className="app-width" style={{ marginTop: "8px" }}>
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
    </div>
  </>
)

export default IndexPage
