const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const webpackLodashPlugin = require('lodash-webpack-plugin')

// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /{slug})

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // First, query all the pages on your WordPress
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create those pages with the wp_page.jsx template.
        const pageTemplate = path.resolve(`./src/templates/wp_page.jsx`)
        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id
            }
          })
        })
      })
      // Now, querying all wordpressPosts
      .then(() => {
        graphql(
          `
            {
              allWordpressWpWork {
                edges {
                  node {
                    id
                    title
                    slug
                    acf {
                      project_subtitle
                      project_url
                      project_credit_one
                      project_credit_two
                      description_heading
                      description_text
                      project_image {
                        id
                      }
                      description_image_left {
                        id
                      }
                      description_image_right {
                        id
                      }
                      quote_text
                      quote_author
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const projects = result.data.allWordpressWpWork.edges
        const ProjectTemplate = path.resolve(`./src/templates/project.jsx`)
        _.each(projects, project => {
          createPage({
            path: `/${project.node.slug}/`,
            component: slash(ProjectTemplate),
            context: {
              slug: project.node.slug
            }
          })
        });
      resolve();
    });
  })
})
}



exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }
}
