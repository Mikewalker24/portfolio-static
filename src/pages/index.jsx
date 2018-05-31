import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../data/SiteConfig';
import { SEO, Project } from '../components';
import { getImageData } from '../utils/functions';

const HomeContainer = styled.main``;

const Main = styled.main``;

const Divider = styled.hr`
  width: 33%;
  max-width: 450px;
`;

const Hero = styled.section`
  background-color: #143329;
  color: white;
`;

const Recent = styled.section`
  color: white;
`;

const Hi = styled.section`
  color: black;
`;

const What = styled.section`
  color: black;
`;

export default class Index extends React.Component {
  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    const { acf } = data;
    const projects = this.props.data.allWordpressWpWork.edges.slice(0, 3);

    const { transition } = this.props;

    const hiImage = getImageData(acf.hi_image);

    return (
      <HomeContainer>
        <Helmet title={config.siteTitle} />
        <SEO projects={projects} />

        <Main className="site-main" style={transition && transition.style}>
          <Hero id="splash">
            <h1>{acf.splash_heading}</h1>
            <Divider />
            <h3>{acf.splash_subheading}</h3>
          </Hero>

          <Recent id="recent">
            <h2>{acf.recent_heading}</h2>

            <div className="recent-container container">
              <div className="image-container">
                {projects.map(project => {
                  const {
                    title,
                    slug,
                    id,
                    acf: { project_subtitle, project_image: { source_url } },
                  } = project.node;
                  return (
                    <Project
                      title={title}
                      subtitle={project_subtitle}
                      slug={slug}
                      key={id}
                      sourceurl={source_url}
                    />
                  );
                })}
              </div>
            </div>
          </Recent>

          <Hi className="hi" id="hi">
            <div className="container">
              <div className="hi-container">
                <div className="hi-left">
                  <div className="hi-outline">
                    <h3>{acf.hi_heading}</h3>

                    <div dangerouslySetInnerHTML={{ __html: acf.hi_copy }} />
                  </div>
                </div>

                <div className="hi-right">
                  <img {...hiImage} />
                </div>
              </div>
            </div>
          </Hi>

          <What id="what" className="what">
            <div className="container">
              <div className="heading-container clearfix">
                <h2>{acf.what_heading}</h2>
              </div>

              {acf.what_content.map((item, i) => {
                return (
                  <div className="what-container" key={i}>
                    <h4>{item.what_number}</h4>

                    <h3>{item.what_subheading}</h3>

                    <p dangerouslySetInnerHTML={{ __html: item.what_copy }} />

                    <hr />
                  </div>
                );
              })}
            </div>
          </What>
        </Main>
      </HomeContainer>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  fragment AcfImage on wordpress__wp_media {
    localFile {
      childImageSharp {
        sizes {
          sizes
          src
          srcSet
        }
      }
    }
  }

  query IndexQuery {
    allWordpressPage {
      edges {
        node {
          acf {
            splash_heading
            splash_subheading
            recent_images {
              recent_project_title
              recent_url
              recent_description
            }
            recent_heading
            hi_copy
            hi_image {
              ...AcfImage
            }
            hi_heading
            what_heading
            what_content {
              what_subheading
              what_copy
              what_number
            }
          }
        }
      }
    }
    allWordpressWpWork {
      edges {
        node {
          title
          slug
          id
          acf {
            project_subtitle
            project_image {
              source_url
            }
          }
        }
      }
    }
  }
`;
