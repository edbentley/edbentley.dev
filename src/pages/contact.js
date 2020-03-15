import "../style.css"
import React from "react"

import SEO from "../components/seo"

const ContactPage = () => (
  <main className="app-width" style={{ marginTop: "28px" }}>
    <SEO title="Contact" />
    <form
      className="flex-column"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* Hidden field required for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <label className="flex-column mb16">
        Message
        <textarea name="message" rows="5" style={{ marginTop: "4px" }} />
      </label>
      <div
        className="flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <label className="flex-column mb16 flex1">
          Your email
          <input type="email" name="email" style={{ marginTop: "4px" }} />
        </label>
        <button type="submit" style={{ margin: "8px 0 0 8px" }}>
          Send
        </button>
      </div>
    </form>
  </main>
)

export default ContactPage
