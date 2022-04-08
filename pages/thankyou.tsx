import styles from '../styles/success.module.scss';
import Link from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';

const Success: NextPage = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('formData')) {
      const formData = JSON.parse(localStorage.formData);

      fetch('https://enkexikee59wnty.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData?.firstName,
          lastName: formData?.lastName,
          email: formData?.email,
          additionalEmails: formData?.additionalEmails,
          teamName: formData?.teamName,
          message: formData?.message,
          category: formData?.category,
          phone: formData?.phone
        })
      });
      localStorage.removeItem('formData');
    }
  }

  return (
    <div className={styles.success}>
      <Head>
        <title>Thank You | Kazoo48</title>
        <meta
          name="description"
          content="Thank you for signing up to compete in the Kazoo 48 Hour Film Festival"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Good luck in the show!</h1>
      <p>
        You will get an email with your reciept shortly. If you do not recieve
        an email, please contact us at
        <a href="mailto:kazoo48film@gmail.com"> kazoo48film@gmail.com</a>
      </p>
      <Link href="/">
        <a className={styles.home}>Go Home</a>
      </Link>
    </div>
  );
};

export default Success;
