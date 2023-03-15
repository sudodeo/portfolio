import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  // display loader for 5 seconds
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>Sudodeo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Michael Israel" />

        {/* Favicon */}
        <link rel="icon" href="favicons/sudo-favicon.ico" />
      </Head>

      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <Header />

          <div className="w-full overflow-hidden">
            <About />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}
