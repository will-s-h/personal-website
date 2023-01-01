import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head';
import Link from 'next/link';

export default function Resume() {
    return (
        <Layout>
            <Head>
                <title>404 Error</title>
            </Head>
            <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl pb-10 tracking-tight 
            text-black">
                Resume
            </div>

            <section className={utilStyles.headingMd}>
                <p>Click <Link href="/files/resume.pdf" class="font-bold hover:opacity-70">here</Link> if 
                you wish to see the one-page PDF version.</p>
            </section>

            <p class="pb-5"/>
        </Layout>
    );
}