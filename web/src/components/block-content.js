import { PortableText } from "@portabletext/react";
import React from "react";

import { Figure } from "./figure";

const components = {
  types: {
    figure: Figure
  }
};

const BlockContent = ({ blocks }) => {
	console.log('blocks', blocks);
	return <PortableText value={blocks} components={components} />
};

export default BlockContent;

