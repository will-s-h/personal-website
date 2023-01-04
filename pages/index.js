import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
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
  return <>
    <Layout home>

      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl tracking-tight 
      text-black text-center pb-7">
        <span class="rotate-6 bg-red px-1 inline-block">
          <span class="-rotate-3 bg-orange px-2 inline-block">
            <span class="-rotate-3 bg-yellow px-3 pb-1 inline-block">
              William Huang
            </span>
          </span>
        </span>
      </div>

      <section class="text-sans text-lg text-justify">
        <p>Hi, I'm William. I'm a <span class="text-red font-bold">software engineer</span> and <span class="text-purple font-bold">physicist</span> at Stanford University.
        Most recently, I was the <span class="text-orange font-bold">lead researcher</span> studying Fast Radio Bursts at Stanford and developed <span class="text-yellow font-bold">medical decision-making
        AI</span> with Professor Andrew Ng. Before that, I won a Gold Medal at the <span class="font-bold">International Physics Olympiad</span>. To contact me, simply
        email <Link href="mailto:willsh@stanford.edu" class="text-blue font-bold hover:text-opacity-70">willsh@stanford.edu</Link>.</p>
        <p class="pb-3"/>
        <p><span class="font-bold">Quick Links:</span> <Link href="https://github.com/will-s-h" class="text-blue font-bold hover:text-opacity-70">GitHub</Link>, <Link href="https://linkedin.com/in/william-s-huang" class="text-blue font-bold hover:text-opacity-70">LinkedIn</Link>
        </p>
      </section>

      <p class="pb-5"/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 class="font-sans font-bold text-4xl text-center pb-5">Featured Projects</h2>
        <ul class="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {allProjectsData.map(({ id, title, description, featured }) => 
            featured && (
              <Link href={`/projects/${id}`}>
                <div class="group w-full h-full p-5 border-8 border-blue hover:border-red hover:bg-red">
                  <span class="block truncate font-sans font-black text-black group-hover:text-yellow">{title}</span>
                  <span class="font-sans text-sm text-black group-hover:text-yellow">{description}</span>
                </div>
              </Link>
            )
          )}
        </ul>
      </section>
    </Layout>
  </>;
}