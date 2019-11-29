import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.nodePage
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <small>
          <em>{Date(post.created)}</em>
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    nodePage(id: { eq: "887660df-dcda-5e6d-9b1e-9d93d920895d" }) {
      title
      body {
        value
      }
      created
    }
  }
`
