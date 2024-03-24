import Head from "next/head";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import LoadingScreen from "../components/LoadingScreen";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("../components/NavBar"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      // once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Sudodeo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <meta
          name="title"
          content=" Adeoluwa Adesola - Backend Developer Portfolio"
        />
        <meta
          name="description"
          content="Skilled backend developer Adeoluwa Adesola's portfolio showcases expertise in server-side app development, web scraping, and API creation."
        />
        <meta
          name="keywords"
          content="backend, typescript, python, javascript, golang, go, developer, back-end developer, sudodeo, programmer, adeoluwa adesola, deolu, web scraping, server-side, api, backend developer, reverse engineer, software engineer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Michael Israel" />

        {/* more SEO */}
        <meta name="theme-color" content="#0c0b47" />
        <meta name="msapplication-TileColor" content="#0c0b47" />
        <meta
          name="msapplication-TileImage"
          content="https://sudodeo.vercel.app/preview_sq.png"
        />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="application-name" content="Sudodeo" />
        <meta name="apple-mobile-web-app-title" content="Sudodeo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="google-site-verification"
          content="CLtOKfHzLLt_s1uzrTc3pAht6p_pyVyTHE14a2InQEk"
        />

        {/* open graph */}
        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://www.sudodeo.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Adeoluwa Adesola - Backend Developer"
        />
        <meta property="og:description" content="Backend Developer Portfolio" />
        <meta
          property="og:image"
          content="https://sudodeo.vercel.app/OG_card.png"
        />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sudodeo.vercel.app" />
        <meta
          property="twitter:url"
          content="https://www.sudodeo.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Adeoluwa Adesola - Backend Developer"
        />
        <meta
          name="twitter:description"
          content="Backend Developer Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://sudodeo.vercel.app/OG_card.png"
        />

        {/* Favicon */}
        <link rel="icon" href="favicons/sudo-favicon.ico" />
        <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png" />
        <link rel="shortcut icon" href="favicons/sudo-favicon.ico" />
      </Head>

      <>
        <LoadingScreen />

        <NavBar />
        <Header />

        <div className="w-full overflow-hidden">
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </>
    </>
  );
}
