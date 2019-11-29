import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

class IndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allNodeBlog.edges
    const about = this.props.data.nodePage
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.id} />)
    })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
         query IndexQuery {
           site {
             siteMetadata {
               title
               subtitle
               copyright
               menu {
                 label
                 path
               }
               author {
                 name
                 email
                 telegram
                 twitter
                 github
                 rss
                 vk
                 drupal
               }
             }
           }
           allNodeBlog(limit: 1000, sort: { order: DESC, fields: [changed] }) {
             edges {
               node {
                 id
                 title
                 body {
                   value
                 }
                 created
                 changed
                 relationships {
                   field_tags {
                     name
                   }
                 }
               }
             }
           }
         }
       `
