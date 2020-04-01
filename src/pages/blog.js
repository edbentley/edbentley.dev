import "../style.css"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <main className="app-width" style={{ marginTop: "8px" }}>
      <SEO title="Blog" />
      {[...devPosts]
        .sort(
          ({ node: { article: postA } }, { node: { article: postB } }) =>
            -postA.published_at.localeCompare(postB.published_at)
        )
        .map(({ node: { article: post } }) => (
          <div key={post.id} style={{ margin: "16px 0 32px 0" }}>
            <a href={post.url} className="hover">
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <h2 className="m0" style={{ marginRight: 8 }}>
                  {post.title}
                </h2>
                <p
                  className="m0"
                  style={{
                    color: "grey",
                    textAlign: "end",
                    flexShrink: 0,
                    paddingTop: 8,
                  }}
                >
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
