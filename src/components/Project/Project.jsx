import React from 'react';
import Link from 'gatsby-link';

const project = (props) => {
  const { slug, sourceurl, title, subtitle } = props;
  return (
    <Link
      to={`/${slug}`}
    >
      <figure>
        <img src={sourceurl} />
        <figcaption>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default project;