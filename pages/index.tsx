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
          content="backend, typescript, python, javascript, developer, back-end developer, sudodeo, programmer, adeoluwa adesola, deolu, web scraping"
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
          content="https://sudodeo.dev/preview_sq.png"
        />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="application-name" content="Sudodeo" />
        <meta name="apple-mobile-web-app-title" content="Sudodeo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sudodeo.dev/" />
        <meta
          property="og:title"
          content="Adeoluwa Adesola - Backend Developer"
        />
        <meta property="og:description" content="Backend Developer Portfolio" />
        <meta property="og:site_name" content="Sudodeo" />
        <meta property="og:image:alt" content="Sudodeo Banner" />
        {/* dimension - 1200×630 pixels */}
        <meta property="og:image" content="https://sudodeo.dev/OG_card.png" />

        {/* twitter, twitter like name not property */}
        <meta
          name="twitter:image:src"
          content="https://sudodeo.dev/preview_sq.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sudodeo.dev/" />
        <meta
          name="twitter:title"
          content="Adeoluwa Adesola - Backend Developer"
        />
        <meta
          name="twitter:description"
          content="Backend Developer Portfolio"
        />
        <meta name="twitter:site" content="@sudodeo" />
        <meta name="twitter:creator" content="@mikelisrael" />
        <meta name="twitter:image:alt" content="Sudodeo Banner" />

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