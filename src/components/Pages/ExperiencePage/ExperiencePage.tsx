import type { FunctionComponent, ReactElement } from 'react';

import styles from './ExperiencePage.module.css';

interface ExperiencePageProps {}

const ExperiencePage: FunctionComponent<
  ExperiencePageProps
> = (): ReactElement => {
  return <div className={styles.container}>Experience Page</div>;
};

export default ExperiencePage;
