import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import config from '../../data/SiteConfig';
import { SEO } from '../components';
import { getImageData } from '../utils/functions';

export default class ProjectTemplate extends React.Component {
  render() {
    const Divider = styled.div`
      border-bottom: 1px solid black;
      margin: 30px;
    `;

    const { slug } = this.props.pathContext;
    const { transition } = this.props;

    const data = this.props.data.wordpressWpWork;
    if (!data.id) {
      data.id = slug;
    }

    const { acf } = data;

    // Check if the project image has sizes (not possible for GIFs)
    const hasSizes = acf.project_image.localFile.childImageSharp;

    // Destructure the image data
    const heroImage = hasSizes
      ? getImageData(acf.project_image)
      : { src: acf.project_image.source_url };
    const leftImage = getImageData(acf.description_image_left);
    const rightImage = getImageData(acf.description_image_right);

    return (
      <div>
        <Helmet>
          <title>{`${data.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={data} postSEO />
        <div className="portfolio main" style={transition && transition.style}>
          <div className="container">
            <div className="content">
              <h2 className="entry-title">{data.title}</h2>

              <hr />

              <p className="subtitle">{acf.project_subtitle}</p>

              <a href={acf.project_url} target="_blank">
                <img {...heroImage} className="portfolio-image" />
              </a>

              <div className="credit-container">
                <p>
                  Visit the
                  <a href={acf.project_url} target="_blank">
                    live site
                  </a>
                </p>

                <p>
                  Design by
                  <a href="http://www.coryingwersen.com/" target="_blank">
                    CORY INGWERSEN
                  </a>
                </p>
              </div>

              <hr className="divider" />

              {acf.quote_text ? (
                <div className="quote-container">
                  <div className="lines">
                    <img
                      src="https://mikewalker.co/wp-content/uploads/2017/06/quotes.png"
                      alt="quote-icon"
                    />
                  </div>

                  <h3>{acf.quote_text}</h3>
                  <p>{acf.quote_author}</p>
                </div>
              ) : null}

              <div className="portfolio-images">
                <a href={acf.project_url} target="_blank">
                  <img {...leftImage} className="description-image" />
                </a>

                <a href={acf.project_url} target="_blank">
                  <img {...rightImage} className="description-image" />
                </a>
              </div>

              <div className="more-work">
                <Link to="/#recent">See More Work</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    wordpressWpWork(slug: { eq: $slug }) {
      id
      slug
      title
      acf {
        project_subtitle
        project_url
        project_credit_one
        project_credit_two
        description_heading
        description_text
        project_image {
          source_url
          ...AcfImage
        }
        description_image_left {
          ...AcfImage
        }
        description_image_right {
          ...AcfImage
        }
        quote_text
        quote_author
      }
    }
  }
`;
