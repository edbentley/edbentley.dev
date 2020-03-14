import "../style.css"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const BlogPage = () => {
  const {
    allDevArticles: { edges: devPosts },
  } = useStaticQuery(graphql`
    query {
      allDevArticles {
        edges {
          node {
            article {
              id
              title
              description
              published_at
              url
            }
          }
        }
      }
    }
  `)

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
          {devPosts.map(({ node: { article: post } }) => (
            <div key={post.id} style={{ margin: "16px 0" }}>
              <a href={post.url} className="hover">
                <div
                  className="flex"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2 className="m0">{post.title}</h2>
                  <p className="m0" style={{ color: "grey" }}>
                    {formatDate(post.published_at)}
                  </p>
                </div>
                <p className="m0" style={{ color: "grey", marginTop: 8 }}>
                  {post.description}
                </p>
              </a>
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  })
}

export default BlogPage
