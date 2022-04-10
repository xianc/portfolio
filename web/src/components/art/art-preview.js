import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import BlockContent from "./../block-content";

import * as styles from "./art-preview.module.css";
import { responsiveTitle3 } from "./../typography.module.css";

function ArtPreview(props) {
  return (
    <Link className={styles.root} to={`/art/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.previewImage))
              .width(300)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      {/*<h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockContent blocks={props._rawExcerpt} />
        </div>
      )}*/}
    </Link>
  );
}

export default ArtPreview;
