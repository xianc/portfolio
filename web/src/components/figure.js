import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import * as styles from "./figure.module.css";

export function Figure({ value }) {
  console.log('value', value);
  if (!value.asset) { return null; }
  // if (!value || !value.asset || !value.asset._id) { console.log('value', value); return null }

  const imageData = getGatsbyImageData(value.asset, { 
    maxWidth: 675
    // height: 500
  }, clientConfig.sanity);

  return (
    <figure className={styles.root}>
      <GatsbyImage image={imageData} alt={value.alt} />
      {value.caption && <figcaption>{value.caption}</figcaption>}
    </figure>
  );
}