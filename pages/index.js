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

function underline(text, color) {
  return <span className="relative">{text}<span className={`absolute left-0 bottom-0 w-full h-1 rounded-lg ${color}`}></span></span>
}

export default function Home({ allPostsData, allProjectsData }) {
  return <>
    <Layout home>
      <div className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight 
      text-black dark:text-slate-100 text-center pb-8">
        William Huang
      </div>

      <section className="text-sans font-light text-lg text-justify">
        <p>Hi, I'm William. I'm an {underline("ML Researcher", "bg-red/50")}, {underline("full stack developer", "bg-purple/50")}, 
        and {underline("physicist", "bg-yellow/50")} at Stanford University. I'm currently a {underline("Machine Learning Researcher", "bg-indigo-400/50")} with The Movement Lab under Karen Liu. 
        Previously, I was a {underline("deep learning researcher", "bg-green-400/50")} in the Ng Lab (Stanford) and Rajpurkar Lab (Harvard Med), 
        an {underline("astrophysics researcher", "bg-orange/50")} studying Fast Radio Bursts at Stanford, and a Gold Medalist at 
        the {underline("International Physics Olympiad", "bg-slate-500/50")}. To contact me, simply 
        email <Link href="mailto:willsh@stanford.edu" className="text-blue hover:text-opacity-70">willsh@stanford.edu</Link>.</p>
        <p className="pb-3"/>
      </section>

      <p className="pb-5"/>
      <h2 className="font-sans text-3xl font-semibold text-center">Featured Projects</h2>
      <p className="text-center font-sans">For a full list, see the <Link href="/projects" className="hover:opacity-70">Projects</Link> page.</p>
      <p className="pb-5"></p>
      <AllProjects featuredOnly allProjectsData={allProjectsData}/>

      <p className="pb-8"/>
      <h2 className="font-sans text-3xl font-semibold text-center">Featured Research/Notes</h2>
      <p className="text-center font-sans">For a full list, see the <Link href="/writing" className="hover:opacity-70">Writing</Link> page.</p>
      <p className="pb-5"></p>
      <AllPosts featuredOnly allPostsData={allPostsData}/>
      
    </Layout>
  </>;
}