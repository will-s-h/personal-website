import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 Error</title>
            </Head>
            <h1 className="font-sans font-semibold text-6xl pb-5 text-center">404</h1>
            <h1 className="font-sans font-extralight text-2xl pb-5 text-center">You've reached a page that doesn't exist.</h1>
            <p className="font-sans text-center hover:opacity-70"><Link href="/">Back to Home</Link></p>
        </Layout>
    );
}