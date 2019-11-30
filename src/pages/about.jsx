import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

class AboutRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const about = this.props.data.nodePage

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">{about.title}</h1>
                <div
                  className="page__body"
                  /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{ __html: about.body.value }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutRoute

export const aboutQuery = graphql`
         query aboutQuery {
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
           nodePage(id: { eq: "887660df-dcda-5e6d-9b1e-9d93d920895d" }) {
             title
             body {
               value
             }
             created
           }
         }
       `
