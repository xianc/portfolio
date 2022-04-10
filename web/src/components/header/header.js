import { Link } from "gatsby";
import React from "react";
import Icon from "./../icon";
import { cn } from "../../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, siteTitle, metaDescription }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
        <div className="tagline">{metaDescription} front-end developer x product manager</div>
      </div>

      <nav className={cn(styles.nav)}>
        <ul>
          <li>
            <Link to="/">home</Link>
            <Link to="/art/">art</Link>
            <Link to="/about/">about</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
