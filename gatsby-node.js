/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  /**
    *
    * Articoli
    *
  */

  const articles = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: articleData.path.alias,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ArticleId: articleData.id,
      }
    })
  );

  /**
    *
    * Pagine base
    *
  */
  const basicPages = await graphql(`
    {
      allNodePage {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  basicPages.data.allNodePage.nodes.map(pagesData =>
    createPage({
      path: pagesData.path.alias,
      component: path.resolve(`src/templates/basicpages.js`),
      context: {
        PageId: pagesData.id,
      }
    })
  );
}
