import type { FunctionComponent, ReactElement } from 'react';

import { companyDetails } from './config';
import ExpTile from './ExpTile/ExpTile';

import styles from './ExperiencePage.module.css';

interface ExperiencePageProps {}

const ExperiencePage: FunctionComponent<
  ExperiencePageProps
> = (): ReactElement => {
  return (
    <div className={styles.container}>
      {Object.keys(companyDetails).map((eachCompany) => {
        const companyInfo =
          companyDetails[eachCompany as keyof typeof companyDetails];
        return <ExpTile key={companyInfo.companyName} {...companyInfo} />;
      })}
    </div>
  );
};

export default ExperiencePage;
