import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Add Network</title>
        <meta name="title" content="Add Network" />
        <meta name="description" content="Add Network to MetaMask" />
        <meta name="theme-color" content="#ea580c" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://addnetwork.vercel.app/" />
        <meta property="twitter:title" content="Add Network" />
        <meta
          property="twitter:description"
          content="Add Network to MetaMask"
        />
        <meta property="twitter:image" content="/socialMedia.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content="https://addnetwork.vercel.app/"
          key="ogurl"
        />
        <meta property="og:image" content="/socialMedia.png" key="ogimage" />
        <meta property="og:title" content="Add Network" key="ogtitle" />
        <meta
          property="og:description"
          content="Add Network to MetaMask"
          key="ogdesc"
        />
      </Head>
      <div className="flex flex-col min-h-screen px-2 bg-gray-900 text-slate-300">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
