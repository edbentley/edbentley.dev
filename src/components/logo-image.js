import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoImage = () => {
  // https://gatsby.dev/gatsby-image
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.profilePic.childImageSharp.fluid}
      alt="profile-picture"
      style={{
        borderRadius: "50%",
        boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.1)",
      }}
    />
  )
}

export default LogoImage
