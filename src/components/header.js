import React from "react"
import { Link } from "gatsby"
import TwitterLogo from "../images/twitter.inline.svg"
import GitHubLogo from "../images/github.inline.svg"
import LinkedInLogo from "../images/linkedin.inline.svg"
import LogoImage from "../components/logo-image"

const Header = ({ page }) => (
  <header className="app-width header flex-column">
    <section
      className="flex"
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex-column">
        <h1>Ed Bentley</h1>
        <div className="flex" style={{ marginTop: "16px" }}>
          <a href="https://twitter.com/edsbentley">
            <TwitterLogo
              width="32px"
              height="32px"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
          </a>
          <a href="https://github.com/edbentley">
            <GitHubLogo
              width="32px"
              height="32px"
              style={{ fill: "#181717", marginRight: "8px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/edsbentley">
            <LinkedInLogo
              width="32px"
              height="32px"
              style={{ fill: "#0077B5" }}
            />
          </a>
        </div>
      </div>
      <div style={{ width: "150px" }}>
        <LogoImage />
      </div>
    </section>
    <nav className="flex" style={{ marginTop: "32px" }}>
      <Link
        to="/"
        style={{
          marginRight: "16px",
          padding: "8px 4px",
          borderBottom: page === "about" ? "3px solid #166bfe" : "none",
        }}
      >
        About
      </Link>
      <Link
        to="/blog"
        style={{
          marginRight: "16px",
          padding: "8px 4px",
          borderBottom: page === "blog" ? "3px solid #166bfe" : "none",
        }}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        style={{
          marginRight: "16px",
          padding: "8px 4px",
          borderBottom: page === "contact" ? "3px solid #166bfe" : "none",
        }}
      >
        Contact
      </Link>
    </nav>
  </header>
)

export default Header
