import { FC } from 'react';
import styles from './quote.module.scss';

type QuoteProps = {
  quote: string;
  quotee: string;
  movie: string;
  isEven: boolean;
};

const Quote: FC<QuoteProps> = ({ quote, quotee, movie, isEven }) => {
  return (
    <div className={isEven ? styles.flipBubble : styles.bubble}>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.quotee}>-{quotee}</p>
      <p className={styles.movie}>{movie}</p>
    </div>
  );
};

export default Quote;
