import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedProjectsData } from '../lib/projects';
import { getSortedPostsData } from '../lib/posts';
import AllProjects from '../lib/allProjects';
import AllPosts from '../lib/allPosts';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  return <>
    <Layout home>
      <div class="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight 
      text-black text-center pb-8">
        <span class="rotate-6 bg-red px-1 inline-block">
          <span class="-rotate-3 bg-orange px-2 inline-block">
            <span class="-rotate-3 bg-yellow px-3 inline-block">
              William Huang
            </span>
          </span>
        </span>
      </div>

      <section class="text-sans text-lg text-justify">
        <p>Hi, I'm William. I'm a <span class="text-red font-bold">software engineer</span> and <span class="text-purple font-bold">physicist</span> at Stanford University.
        I'm currently a <span class="text-yellow font-bold">medical AI researcher</span> in the Ng Lab (Stanford) and Rajpurkar Lab (Harvard Med). 
        Previously, I was the <span class="text-orange font-bold">lead researcher</span> studying Fast Radio Bursts at Stanford. Before that, I won a Gold Medal at 
        the <span class="font-bold">International Physics Olympiad</span>. To contact me, simply 
        email <Link href="mailto:willsh@stanford.edu" class="text-blue font-bold hover:text-opacity-70">willsh@stanford.edu</Link>.</p>
        <p class="pb-3"/>
      </section>

      <p class="pb-5"/>
      <h2 class="font-sans font-bold text-4xl text-center">Featured Projects</h2>
      <p class="text-center font-sans">For a full list, see the <Link href="/projects" class="hover:opacity-70">Projects</Link> page.</p>
      <p class="pb-5"></p>
      <AllProjects featuredOnly allProjectsData={allProjectsData}/>

      <p class="pb-8"/>
      <h2 class="font-sans font-bold text-4xl text-center">Featured Research/Notes</h2>
      <p class="text-center font-sans">For a full list, see the <Link href="/writing" class="hover:opacity-70">Writing</Link> page.</p>
      <p class="pb-5"></p>
      <AllPosts featuredOnly allPostsData={allPostsData}/>
      
    </Layout>
  </>;
}