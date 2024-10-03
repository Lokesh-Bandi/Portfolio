import type { CSSProperties, FunctionComponent, ReactElement } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Lottie from 'react-lottie';

import animatedMan from '../../lotties/man.json';

import { COMPANIES, SOCIAL_LINKS } from './config';

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
    <div className={styles.homePageWrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.socialLinks}>
          <div className={styles.socialLink}>
            <a href={`mailto:${SOCIAL_LINKS.gmail}`}>
              <FcGoogle size={32} />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a href={SOCIAL_LINKS.linkedIn} target={'_blank'} rel="noreferrer">
              <FaLinkedin color="#2268A7" size={32} />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a href={SOCIAL_LINKS.github} target={'_blank'} rel="noreferrer">
              <FaGithub size={32} />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a href={SOCIAL_LINKS.location} target={'_blank'} rel="noreferrer">
              <FaLocationDot size={32} color={'#DC4C3E'} />
            </a>
          </div>
        </div>
        <div className={styles.personalDescSection}>
          <div className={styles.greetingBlock}>{`Hello!!!`}</div>
          <div className={styles.nameBlock}>
            {`I`}
            <span className={styles.nameQ}>{`'`}</span>
            {`m Lokesh Bandi`}
          </div>
          <div className={styles.smallDesc}>{smallDesc}</div>
          <div className={styles.startButton}>{`Get Started`}</div>
        </div>
        <div className={styles.profilePhotoSection}>
          <div className={styles.profilePhoto}>
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
      <div className={styles.workExpSection}>
        <div className={styles.workTitle}>{'Worked with'}</div>
        <div className={styles.companies}>
          {Object.keys(COMPANIES).map((eachCompany) => {
            const company = COMPANIES[eachCompany as keyof typeof COMPANIES];
            return (
              <div
                key={eachCompany}
                className={styles.eachCompanyDiv}
                style={{ '--imgWidth': `${company.width}px` } as CSSProperties}
              >
                <img src={company.companyLogo} alt={eachCompany} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
