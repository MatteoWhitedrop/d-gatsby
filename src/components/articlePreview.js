import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ArticlePreview = ({ title, path, image}) => (
    <div className={"col-md-6 mb-5"}>
        <div className={"card"}>
            <Img fluid={image} alt={title} className={"card-img-top"} />
            
            <div className={"card-body"}>
                <Link to={path}>
                    <h2>{title}</h2>
                </Link>
                <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dignissim ante, ut dictum tortor. Fusce tincidunt vel orci id dignissim. Suspendisse id congue neque. </p>
                <a href={path} className={"btn btn-primary"}>Leggi tutto</a>
            </div>
        </div>        
    </div>
);

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    //image: PropTypes.string.isRequired
};

export default ArticlePreview;

