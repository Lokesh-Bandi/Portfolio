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
        const expDetails =
          companyDetails[eachCompany as keyof typeof companyDetails];
        const companyCoreDetails = expDetails.companyInfo;
        return (
          <ExpTile
            key={companyCoreDetails.name}
            companyCoreDetails={companyCoreDetails}
            {...expDetails}
          />
        );
      })}
    </div>
  );
};

export default ExperiencePage;
