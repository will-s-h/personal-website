import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects' // only difference from [id].js in 
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import ReactMarkdown from 'react-markdown';
import Custom404 from '../404';
import rehypeRaw from 'rehype-raw';

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
        
      <h1 className="text-black dark:text-white text-center font-sans font-bold text-3xl mlg:text-5xl pb-2">{projectData.title}</h1>
      <div className="text-center font-light text-xl w-full">
        <Date dateString={projectData.date}/>
      </div>

      {/* TODO: code section for tags */}

      <hr className="my-3 mx-auto w-48 h-1 bg-gray-200 rounded border-0"/>
      <div className="prose prose-md mlg:prose-lg max-w-none dark:text-white">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{projectData.content}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}