import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';


const Article = ({ data }) => {
  const post = data.nodeArticle;

  return (
    <Layout>
      <h1>{ post.title }</h1>
      <img
        src={ post.relationships.field_image.localFile.publicURL }
        alt=""
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}
      />
    </Layout>
  );
};
Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }){
      id
      title
      relationships {
        field_image {
          localFile {
            publicURL
          }
        }
      }
      body {
        processed
      }
    }
  }
`;

export default Article;
