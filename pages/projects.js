import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import AllProjects from '../lib/allProjects';

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
        <title>Projects</title>
      </Head>

      <div className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl pb-3 tracking-tight 
      text-black dark:text-white">
        Projects
      </div>

      <section className={utilStyles.headingMd}>
        <p>Here are some of the projects I've been working on.</p>
      </section>

      <p className="pb-5"/>

      <AllProjects allProjectsData={allProjectsData}/>
      
    </Layout>
  );
}