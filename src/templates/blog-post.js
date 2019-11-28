import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.nodeBlog
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <small><em>{Date(post.created)}</em></small>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeBlog(id: { eq: $id }) {
      title
      body {
        value
      }
      created
    }
  }
`
