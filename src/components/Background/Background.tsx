import type { CSSProperties, FunctionComponent, ReactElement } from 'react';

import styles from './Background.module.css';

interface BackgroundProps {}

const Background: FunctionComponent<BackgroundProps> = (): ReactElement => {
  const GRID_ELEMENTS = 20;
  return (
    <div
      className={styles.appBg}
      style={
        {
          '--count': GRID_ELEMENTS,
        } as CSSProperties
      }
    >
      {Array.from({ length: GRID_ELEMENTS }, (_, parentInd) => {
        return Array.from({ length: GRID_ELEMENTS }, (__, ind) => {
          return <div key={parentInd + ind} className={styles.gridItem}></div>;
        });
      })}
    </div>
  );
};

export default Background;
