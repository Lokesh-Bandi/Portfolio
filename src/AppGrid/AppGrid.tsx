import type { FunctionComponent, ReactElement } from 'react';

import Background from '../components/Background/Background';
import Navbar from '../components/Navbar/Navbar';
import Pages from '../components/Pages/Pages';

import styles from './AppGrid.module.css';

interface AppGridProps {}

const AppGrid: FunctionComponent<AppGridProps> = (): ReactElement => {
  return (
    <div className={styles.appGrid}>
      <Navbar />
      <Pages />
      <Background />
    </div>
  );
};

export default AppGrid;
