import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
        
      <h1 className="text-black dark:text-white text-center font-sans font-bold text-5xl pb-2 ">{postData.title}</h1>
      <div className="text-center font-light text-xl">
        <Date dateString={postData.date}/>
      </div>

      {/* TODO: code section for tags */}

      <hr className="my-3 mx-auto w-48 h-1 bg-gray-200 rounded border-0"/>
      <div className="prose prose-lg max-w-none dark:text-white">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{postData.content}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}