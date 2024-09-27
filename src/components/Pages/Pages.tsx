import type { FunctionComponent, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Pages.module.css';

interface PagesProps {}

const Pages: FunctionComponent<PagesProps> = (): ReactElement => {
  return (
    <div className={styles.pagesSection}>
      <Outlet />
    </div>
  );
};

export default Pages;
