import "../style.css"
import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <div
      className="flex-column"
      style={{
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Header page="contact" />
      <main className="app-width" style={{ marginTop: "28px" }}>
        <form name="contact" method="POST" data-netlify="true" className="flex-column">
          <label className="flex-column mb16">
            Message
            <textarea
              name="message"
              rows="5"
              style={{ marginTop: "4px" }}
            />
          </label>
          <div
            className="flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <label className="flex-column mb16 flex1">
              Your email
              <input
                type="email"
                name="email"
                style={{ marginTop: "4px" }}
              />
            </label>
            <button type="submit" style={{ margin: "8px 0 0 8px" }}>
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  </>
)

export default ContactPage
