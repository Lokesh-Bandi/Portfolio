import type { FunctionComponent, ReactElement } from 'react';
import Lottie from 'react-lottie';

import animatedMan from '../../lotties/man.json';

import styles from './HomePage.module.css';

interface HomePageProps {}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animatedMan,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const HomePage: FunctionComponent<HomePageProps> = (): ReactElement => {
  const smallDesc = `Innovative Full Stack Developer with 2 years of experience in designing and implementing comprehensive web applications. Proficient in both front-end and back-end technologies, including React, Node.js, and SQL/NoSQL databases. Demonstrates strong problem-solving skills, performance optimization, and effective API integration proven ability to work effectively in agile teams and deliver high-quality solutions.`;
  return (
    <div className={styles.homeContainer}>
      <div className={styles.personalDescSection}>
        <div className={styles.greetingBlock}>{`Hello!!!`}</div>
        <div className={styles.nameBlock}>{`I'm Lokesh Bandi`}</div>
        <div className={styles.smallDesc}>{smallDesc}</div>
        <div className={styles.startButton}>{`Get Started`}</div>
      </div>
      <div className={styles.profilePhotoSection}>
        <div className={styles.profilePhoto}>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
