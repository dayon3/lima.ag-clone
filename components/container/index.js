import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from '../footer';
import Nav from '../nav';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Lima Labs | Know More, Grow More',
    description: `Lima is home to diverse and bright-minded individuals in Kenya and Tunisia. We aim to impact livelihoods by bringing new age technologies to agriculture.`,
    image: 'https://lima-ag-clone.vercel.app/images/ogImageBanner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="antialiased bg-white dark:bg-gray-900 min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://lima.ag${router.asPath}`} />
        <link rel="canonical" href={`https://lima.ag${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Davis Gitonga" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* TODO: <meta name="twitter:site" content="@limalabs" /> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <header className="fixed top-0 z-30 w-full">
        {/* bg-opacity-50 backdrop-filter backdrop-blur */}
        <Nav />
      </header>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
