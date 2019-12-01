import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostTemplateDetails from '../components/PostTemplateDetails'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.nodeBlog

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} - ${title}`}</title>
            <meta name="description" content={post.description} />
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
         query($id: String!) {
           site {
             siteMetadata {
               title
               subtitle
               copyright
               author {
                 name
                 twitter
               }
               disqusShortname
               url
             }
           }
           nodeBlog(id: { eq: $id }) {
             title
             body {
               value
             }
             created
             relationships {
               field_tags {
                 name
               }
             }
           }
         }
       `
