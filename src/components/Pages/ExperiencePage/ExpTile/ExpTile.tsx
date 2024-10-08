import type { CSSProperties, FC, FunctionComponent, ReactElement } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { GoProjectSymlink } from 'react-icons/go';
import { MdMilitaryTech } from 'react-icons/md';

import { SKILLS_CONFIG } from '../../../../constants';
import { companyDetailsType } from '../config';

import styles from './ExpTile.module.css';

interface ExpTileProps extends companyDetailsType {}

const ExpTile: FunctionComponent<ExpTileProps> = ({
  companyLogo,
  companyName,
  yearOfExp,
  workExp,
  roleDesc,
  projects,
  skills,
  location,
  isCurrent,
  customStyles = {},
}): ReactElement => {
  return (
    <div className={styles.tile} style={customStyles}>
      <div className={styles.companyName}>{companyName}</div>
      <div className={styles.companyLogo}>
        <img
          src={companyLogo.asset}
          style={companyLogo.styles as CSSProperties}
          alt="logo"
        />
      </div>
      <div className={styles.roleInfoSection}>
        <div className={styles.roleTitle}>{roleDesc}</div>
        <div className={styles.yearsOfExp}>
          {yearOfExp.startDate} - {isCurrent ? 'Present' : yearOfExp.endDate}
        </div>
      </div>
      <ul className={styles.workExp}>
        {workExp.map((eachPoint, ind) => {
          return (
            <li key={ind} className={styles.project}>
              {eachPoint}
            </li>
          );
        })}
      </ul>
      <div className={styles.technologiesSection}>
        <div className={styles.sectionTitle}>
          <MdMilitaryTech color="#EFD937" size={24} />
          {'Technologies Used :'}
        </div>
        <div className={styles.skills}>
          {skills.map((skill) => {
            return <Skill skill={skill} key={skill} />;
          })}
        </div>
      </div>
      <div className={styles.projectsSection}>
        <div className={styles.sectionTitle}>
          <GoProjectSymlink color="#3300FF" size={24} />
          {'Projects :'}
        </div>
        <div className={styles.projects}>
          {projects.map((project) => {
            return <Project project={project} key={project} />;
          })}
        </div>
      </div>
      <div className={styles.locationSection}>
        <FaLocationDot size={20} color={'#DC4C3E'} />
        {location}
      </div>
    </div>
  );
};

interface SkillInterface {
  skill: string;
}
const Skill: FC<SkillInterface> = ({ skill }) => {
  const skillConfig = SKILLS_CONFIG[skill as keyof typeof SKILLS_CONFIG];
  return (
    <div
      className={styles.skillwrapper}
      style={
        {
          '--bgColor': skillConfig.bgColor,
          '--textColor': skillConfig.textColor,
        } as CSSProperties
      }
    >
      {skill}
    </div>
  );
};

interface ProjectInterface {
  project: string;
}
const Project: FC<ProjectInterface> = ({ project }) => {
  return <div className={styles.projectwrapper}>{project}</div>;
};

export default ExpTile;
