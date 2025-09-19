'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Quotes.module.css';
import { QuotesApiResponse } from '@lib/features/quotes/quotesApiSlice';

const options = [5, 10, 20, 30];

interface QuotesProps {
  data: QuotesApiResponse | null;
  error: string | null;
  limit: number;
}

export function Quotes({ data, error, limit }: QuotesProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLimitChange = (newLimit: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const existingLimit = params.get('limit')

    if (!existingLimit || existingLimit !== newLimit) {
      params.set('limit', newLimit);
      router.push(`/quotes?${params.toString()}`);
    }
  };

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Error</h1>
        <p className={styles.error}>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Select the Quantity of Quotes to Fetch:</h3>
      <select
        className={styles.select}
        value={limit}
        onChange={(e) => handleLimitChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {data.quotes.map(({ author, quote, id }) => (
        <blockquote key={id} className={styles.blockquote}>
          &ldquo;{quote}&rdquo;
          <footer className={styles.footer}>
            <cite>{author}</cite>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}