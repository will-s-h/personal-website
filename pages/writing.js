import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import AllPosts from '../lib/allPosts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl pb-10 tracking-tight 
      text-black">
        Writing
      </div>

      <section className={utilStyles.headingMd}>
        <p>Here is an assortment of my writing.</p>
      </section>

      <p class="pb-5"/>

      <AllPosts allPostsData={allPostsData}/>      
    </Layout>
  );
}