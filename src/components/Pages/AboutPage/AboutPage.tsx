import type { FunctionComponent, ReactElement } from 'react';

import styles from './AboutPage.module.css';

interface AboutPageProps {}

const AboutPage: FunctionComponent<AboutPageProps> = (): ReactElement => {
    return <div className={styles.container}>{/* Your Code */}</div>;
};

export default AboutPage;
