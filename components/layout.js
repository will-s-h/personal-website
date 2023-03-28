import styles from './layout.module.css';
import siteMetadata from './siteMetadata';
import NavBar from './navbar';
import Footer from './footer';

import Head from 'next/head';
import React from 'react';
const Fragment = React.Fragment;

export default function Layout({ children, home }) {
  return (
    <Fragment>
      <Head>
        <title>{siteMetadata.siteTitle}</title>
        <link rel="icon" href="/images/profile.jpg"></link>
      </Head>
      <div className={styles.defeatScrollBar}>
        <NavBar/>
        <div class="mt-5 max-w-[1280px] mx-auto px-4 lg:px-6">
          <main>{children}</main>
        </div>
        <Footer/>
        <br/>
      </div>
    </Fragment>
  );
}