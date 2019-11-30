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
