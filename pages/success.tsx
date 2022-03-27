import styles from '../styles/success.module.scss';
import Link from 'next/link';

const Success = () => {
  return (
    <div className={styles.success}>
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
