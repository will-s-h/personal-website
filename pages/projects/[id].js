import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects' // only difference from [id].js in 
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div>
        <article class="prose md:prose-xl prose-p:leading-normal">
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml}}></div>
        </article>
      </article>
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