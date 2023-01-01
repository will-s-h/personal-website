import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import NavBar from './navbar';
import Link from 'next/link';

import React from 'react';
const Fragment = React.Fragment;

const name = 'William Huang';
export const siteTitle = 'William Huang\'s Personal Website';

export default function Layout({ children, home }) {
  return (
    <Fragment>
      <NavBar/>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/" class="font-bold hover:opacity-70">Back to home</Link>
          </div>
        )}
      </div>
      <br/>
    </Fragment>
  );
}