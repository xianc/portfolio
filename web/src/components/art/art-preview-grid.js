import { Link } from "gatsby";
import React from "react";
import ArtPreview from "./art-preview";

import * as styles from "./art-preview-grid.module.css";

function ArtPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ArtPreview {...node} />
            </li>
          ))}
      </ul>
     {/* {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}*/}
    </div>
  );
}

ArtPreviewGrid.defaultProps = {
  title: "",
  nodes: []
  // browseMoreHref: ""
};

export default ArtPreviewGrid;
