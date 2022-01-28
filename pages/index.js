import Head from 'next/head';
import Header from '@/components/Header';
import { meta } from '@/data/config';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      {/* <MobileHeader /> */}
      <Header />
      <Hero />
      <MainContent />
    </>
  );
}
