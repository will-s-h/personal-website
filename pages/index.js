import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import { Gradient } from '../components/gradient';
import { useEffect } from 'react'

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
    <canvas id="gradient-canvas" class="-z-50"/>
    <Layout home>
      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl tracking-tight 
      text-black text-center pb-5">
        <span class="rounded-xl inline-block">William Huang</span>
      </div>

      <section class="text-sans text-lg text-justify">
        <p>Hi, I'm William. I'm a <span class="text-red font-bold">software engineer</span> and <span class="text-blue font-bold">physicist</span> at Stanford University.
        Most recently, I've <span class="text-orange font-bold">led a research team</span> studying Fast Radio Bursts at Stanford and developed <span class="text-purple font-bold">medical decision-making
        AI</span> with Professor Andrew Ng. Before that, I won a Gold Medal at the <span class="font-bold">International Physics Olympiad</span>. To contact me, simply
        email <Link href="mailto:willsh@stanford.edu" class="text-blue font-bold hover:text-opacity-70">willsh@stanford.edu</Link>.</p>
        <p class="pb-3"/>
        <p><span class="font-bold">Quick Links:</span> <Link href="/resume" class="text-blue font-bold hover:text-opacity-70">Resume</Link>, <Link href="https://github.com/will-s-h" class="text-blue font-bold hover:text-opacity-70">GitHub</Link>, <Link href="https://linkedin.com/in/william-s-huang" class="text-blue font-bold hover:text-opacity-70">LinkedIn</Link>
        </p>
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