import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl pb-10 tracking-tight 
      text-black">
        Projects
      </div>

      <section className={utilStyles.headingMd}>
        <p>Here are some of the projects I've been working on.</p>
      </section>

      <p class="pb-5"/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {allProjectsData.map(({ id, title, description }) => (
            <Link href={`/projects/${id}`}>
              <div class="group w-full h-full p-5 border-8 border-blue hover:border-red hover:bg-red">
                <span class="block truncate font-sans font-black text-black group-hover:text-yellow">{title}</span>
                <span class="font-sans text-sm text-black group-hover:text-yellow">{description}</span>
              </div>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}