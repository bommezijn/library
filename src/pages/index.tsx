// import styles from "../styles/pages/index.module.scss";
import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { Navigation } from "../components/Navigation";

import { useLocomotiveScroll } from "react-locomotive-scroll";

const Home: NextPage = () => {
  const { scroll } = useLocomotiveScroll();
  console.log(scroll);
  return (
    <>
      <Head>
        <title>Library</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='container example__section' data-scroll-section>
          <h1 className='title'>
            <span className='pinkSpan'>Library</span> App
          </h1>
          <p>A collection of examples recreated and more.</p>
        </section>
        <section
          className='example__section'
          data-scroll-section
        >
          <h2>Second paragraph</h2>
        </section>
        <section
          className='example__section'
          data-scroll-section
          data-scroll-direction='horizontal'
        >
          <h2>Third paragraph</h2>
        </section>
        <section className='example__section' data-scroll-section>
          <h2>Fourth paragraph</h2>
        </section>
      </main>
    </>
  );
};

export default Home;
