const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
     allNodeBlog {
       edges {
         node {
           id
         }
       }
     }
    }
  `
  ).then(result => {
    result.data.allNodeBlog.edges.forEach(({ node }) => {
      createPage({
        path: node.id,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.createPage({
  path: `/about/`,
  component: path.resolve(`./src/templates/about.js`),
  // The context is passed as props to the component as well
  // as into the component's GraphQL query.
  context: {
    id: `887660df-dcda-5e6d-9b1e-9d93d920895d`,
  },
})
