import { format, formatDistance, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import BlockContent from "./../block-content";
import Container from "./../container";
import RoleList from "./../role-list";

import * as styles from "./art.module.css";


function Art(props) {
  const { _rawExcerpt, title, categories, mainImage, publishedAt } = props;
  return (
    <article className={styles.root}>
      <Container>
        {props.mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .fit("crop")
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 hidden className={styles.title}>{title}</h1>
            {_rawExcerpt && <BlockContent blocks={_rawExcerpt || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM do yyyy")}
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Art;
