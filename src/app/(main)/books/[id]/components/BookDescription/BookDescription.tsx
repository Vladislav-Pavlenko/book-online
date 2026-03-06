import { useState } from 'react';
import styles from './BookDescription.module.css';

export default function BookDescription({
  description,
}: {
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > 395;
  const displayedText =
    !expanded && isLong ? description.slice(0, 395) + '...' : description;
  return (
    <p className={styles.description}>
      {displayedText}
      {isLong && (
        <span
          className={styles.button}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? ' Hide' : ' Read more'}
        </span>
      )}
    </p>
  );
}
