import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl pb-10 tracking-tight 
      text-black">
        William Huang
      </div>

      <section className={utilStyles.headingMd}>
        <p>Hello, I'm William. I'm a software engineer and physicist at Stanford University.</p>
        <p>This website is still under construction.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}