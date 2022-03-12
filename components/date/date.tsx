import { FC } from 'react';
import styles from './date.module.scss';

type DateProps = {
  type: string;
  date: string;
  time?: string;
  location?: string;
};

const Date: FC<DateProps> = ({ type, date, time, location }) => {
  return (
    <div className={styles.date}>
      <h3 className={styles.type}>{type}</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.timeLocation}>@ {time ? time : location}</p>
    </div>
  );
};

export default Date;
