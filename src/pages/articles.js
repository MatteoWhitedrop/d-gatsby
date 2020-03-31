import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import ArticlePreview from "../components/articlePreview";

const Articles = ({ data }) => {
    const articles = data.allNodeArticle.nodes;

    return (
        <Layout>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12 mt-5 mb-3"}><h1>Tutti gli articoli</h1></div>

                    {articles.map(article => (
                        <ArticlePreview
                        key={article.id}
                        title={article.title}
                        path={article.path.alias}
                        image={article.relationships.field_image.localFile.childImageSharp.fluid}
                        alt={article.title}
                        />
                    ))}
                </div>
            </div>
            
        </Layout>
    );
}

Articles.propTypes = {
    data: PropTypes.object.isRequired,
};

export const data = graphql`
    {
    allNodeArticle(sort: {order: ASC, fields: id}) {
        nodes {
        title
        path {
            alias
        }
        id
        relationships {
            field_image {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 768) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        }
    }
    }

`;

export default Articles;