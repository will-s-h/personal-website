import Layout from '../components/layout';
import Head from 'next/head';

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 Error</title>
            </Head>
            <h1 class="font-sans font-black text-6xl pb-5 text-mauve-600">404 Error.</h1>
            <h1 class="font-sans font-bold text-4xl">You've reached a page that doesn't exist.</h1>
        </Layout>
    );
}