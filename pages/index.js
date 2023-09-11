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
      <div className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight 
      text-black text-center pb-8">
        <span className="rotate-6 bg-red px-1 inline-block">
          <span className="-rotate-3 bg-orange px-2 inline-block">
            <span className="-rotate-3 bg-yellow px-3 inline-block">
              William Huang
            </span>
          </span>
        </span>
      </div>

      <section className="text-sans text-lg text-justify">
        <p>Hi, I'm William. I'm an <span className="text-red font-bold">ML researcher</span>, <span className="text-purple font-bold">full-stack developer</span>, 
        and <span className="text-yellow font-bold">physicist</span> at Stanford University. I'm currently a <span className="text-indigo-300 font-bold">Machine Learning 
        Researcher</span> with The Movement Lab under Karen Liu. Previously, I was a <span className="text-green-400 font-bold">deep learning researcher</span> in the Ng Lab (Stanford) and Rajpurkar Lab (Harvard Med), 
        a <span className="text-orange font-bold">lead researcher</span> studying Fast Radio Bursts at Stanford, and a Gold Medalist at 
        the <span className="font-bold">International Physics Olympiad</span>. To contact me, simply 
        email <Link href="mailto:willsh@stanford.edu" className="text-blue font-bold hover:text-opacity-70">willsh@stanford.edu</Link>.</p>
        <p className="pb-3"/>
      </section>

      <p className="pb-5"/>
      <h2 className="font-sans font-bold text-4xl text-center">Featured Projects</h2>
      <p className="text-center font-sans">For a full list, see the <Link href="/projects" className="hover:opacity-70">Projects</Link> page.</p>
      <p className="pb-5"></p>
      <AllProjects featuredOnly allProjectsData={allProjectsData}/>

      <p className="pb-8"/>
      <h2 className="font-sans font-bold text-4xl text-center">Featured Research/Notes</h2>
      <p className="text-center font-sans">For a full list, see the <Link href="/writing" className="hover:opacity-70">Writing</Link> page.</p>
      <p className="pb-5"></p>
      <AllPosts featuredOnly allPostsData={allPostsData}/>
      
    </Layout>
  </>;
}