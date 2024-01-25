import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import HeroBackground from "../public/images/Kazoo48Crowd.jpeg";
import HeroLogo from "../public/images/transparent_logo.png";
import FooterLogo from "../public/images/Kazoo.png";
import Button from "../components/button/button";
import Quote from "../components/quote/quote";
import Date from "../components/date/date";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Kazoo48</title>
        <meta
          name="description"
          content="Welcome to the Kalamazoo 48 Hour Film Festival."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroLogo}>
              <Image
                src={HeroLogo}
                alt="Kazoo 48 Logo"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>

            <div className={styles.heroBackground}>
              <Image
                src={HeroBackground}
                alt="Kazoo 48 crowd"
                priority
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </section>

          <div className="container">
            <section className={styles.rules}>
              <h2>Can you make a movie in 48 hours?</h2>

              <div className={styles.ruleWrapper}>
                <div className={styles.ruleBlock}>
                  <Quote
                    quote="“I'd never heard of a man who murdered by the rules.”"
                    quotee="Sheriff Harry S. Truman"
                    movie="Twin Peaks"
                    isEven={false}
                  />

                  <p>
                    Make sure you know how to play by the rules before playing.
                    You’ll find the official rules by clicking the link below.
                  </p>

                  <Button link="/Kazoo48Rules.pdf" text="Rules" />
                </div>

                <div className={styles.ruleBlock}>
                  <Quote
                    quote="“For in dreams, we enter a world that is entirely our own.”"
                    quotee="Albus Dumbledore"
                    movie="Harry Potter and the Prisoner of Azkaban"
                    isEven={true}
                  />

                  <p>
                    Ready to join in the fun? Click the link below to register
                    your team and conquer 48 hour challenge.
                  </p>

                  <Button link="/register" text="Register" />
                </div>
              </div>
            </section>
          </div>

          <section className={styles.date}>
            <div className="container">
              <h2>Mark your calendars</h2>
              <div className={styles.dateComponentWrapper}>
                <Date type="start" date="4/5/24" time="6 pm" />
                <Date type="finish" date="4/7/24" time="6 pm" />
                <Date
                  type="screening"
                  date="4/10/24"
                  location="Kalamazoo&nbsp;10 at 6:30 pm"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.information}>
            <div>
              <p>contact</p>
              <a href="mailto:kazoo48film@gmail.com">kazoo48film@gmail.com</a>
            </div>

            <div>
              <p>Kalamazoo 10</p>
              <p>820 Maple Hill Dr, Kalamazoo 49009</p>
            </div>
          </div>

          <div className={styles.footerLogo}>
            <Image
              src={FooterLogo}
              alt="Kazoo Logo"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
