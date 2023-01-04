import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {allPostsData.map(({ id, title, description }) => (
            <Link href={`/posts/${id}`}>
              <div class="group w-full h-full p-5 border-8 border-purple hover:border-yellow hover:bg-yellow">
                <span class="block truncate font-sans font-black text-black group-hover:text-purple">{title}</span>
                <span class="font-sans text-sm text-black group-hover:text-purple">{description}</span>
              </div>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}