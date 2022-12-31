import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import NavBar from '../components/navbar'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import { Gradient } from '../components/gradient';
import {useEffect} from 'react'
import Script from 'next/script';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData
    },
  };
}

export default function Home({ allPostsData, allProjectsData}) {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  });

  return <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <canvas id="gradient-canvas" class="absolute -z-50"/>
    <Layout home>
      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl tracking-tight 
      text-black text-center pb-5">
        <span class="rounded-xl inline-block">William Huang</span>
      </div>

      <section className={utilStyles.headingMd}>
        <p>Hi, I'm William. I'm a <span class="inline-block text-red font-bold">software engineer</span> and <span class="text-blue font-bold">physicist</span> at Stanford University.
        This website is still under construction.</p>
      </section>

      <p class="pb-5"/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 class="font-sans font-bold text-2xl pb-2">Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
              <div class="rounded-lg bg-white bg-opacity-20 hover:shadow-md hover:bg-opacity-40 p-2">
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 class="font-sans font-bold text-2xl pb-2">Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <div class="rounded-lg bg-white bg-opacity-20 hover:shadow-md hover:bg-opacity-40 p-2">
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
  </>;
}