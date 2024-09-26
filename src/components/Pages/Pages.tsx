import type { FunctionComponent, ReactElement } from 'react';

import HomePage from './HomePage/HomePage';

import styles from './Pages.module.css';

interface PagesProps {}

const Pages: FunctionComponent<PagesProps> = (): ReactElement => {
  return (
    <div className={styles.pagesSection}>
      <HomePage />
    </div>
  );
};

export default Pages;
