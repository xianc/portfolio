import React from "react";
import Header from "./../header/header";

import "../../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, siteTitle, metaDescription }) => (
  <>
    <Header siteTitle={siteTitle} metaDescription={metaDescription} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <a href="https://www.linkedin.com/in/xian-chen-4998673b/">LinkedIn</a>  -  <a href="http://instagram.com/xaixai.c">Instagram</a> 
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
