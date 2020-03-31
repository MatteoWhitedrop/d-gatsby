import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';


const BasicPages = ({ data }) => {
  const post = data.nodePage;

  return (
    <Layout>
      <h1>{ post.title }</h1>
      <p>_________________________________</p>
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}
      />
    </Layout>
  );
};
BasicPages.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($PageId: String!) {
    nodePage(id: { eq: $PageId }){
      id
      title
      body {
        processed
      }
    }
  }
`;

export default BasicPages;
