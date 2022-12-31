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
        <h2 class="font-sans font-bold text-2xl pb-2">Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/Posts/${id}`}>
              <div class="rounded-lg bg-black bg-opacity-5 hover:shadow-lg hover:bg-opacity-0 p-2">
                <span class="font-sans font-light">{title}</span>
                <br />
                <span class="font-sans text-black text-sm text-opacity-50">
                  <Date dateString={date} />
                </span>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}