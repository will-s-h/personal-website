import Head from 'next/head';
import Layout from '../components/layout';
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
        <title>Writing</title>
      </Head>

      <div className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl pb-3 tracking-tight 
      text-black dark:text-white">
        Writing
      </div>

      <section className={utilStyles.headingMd}>
        <p>Here is an assortment of my research, notes, and other writing.</p>
      </section>

      <p className="pb-5"/>

      <AllPosts allPostsData={allPostsData}/>      
    </Layout>
  );
}