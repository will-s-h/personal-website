import styles from './layout.module.css';
import siteMetadata from './siteMetadata';
import NavBar from './navbar';
import Footer from './footer';

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
const Fragment = React.Fragment;

export default function Layout({ children, home }) {
  return (
    <Fragment>
      <Head>
        <title>{siteMetadata.siteTitle}</title>
        <link rel="icon" href="/images/profile.jpg"></link>
      </Head>
      <NavBar/>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/" class="font-bold hover:opacity-70">Back to home</Link>
          </div>
        )}
      </div>
      <Footer/>
      <br/>
    </Fragment>
  );
}