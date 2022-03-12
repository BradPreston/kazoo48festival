import { FC } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

type ButtonProps = {
  link: string;
  text: string;
};

const Button: FC<ButtonProps> = ({ link, text }) => {
  return (
    <div className={styles.link}>
      <Link href={link}>
        <a className={styles.linkText}>{text}</a>
      </Link>
    </div>
  );
};

export default Button;
