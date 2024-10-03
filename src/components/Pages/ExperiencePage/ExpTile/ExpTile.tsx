import type { CSSProperties, FunctionComponent, ReactElement } from 'react';

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
}): ReactElement => {
  return (
    <div className={styles.tile}>
      <div className={styles.compnayName}>{companyName}</div>
      <div className={styles.yearsOfExp}>
        {yearOfExp.startDate} - {yearOfExp.endDate}
      </div>
      <div className={styles.companyLogo}>
        <img
          src={companyLogo.asset}
          style={companyLogo.styles as CSSProperties}
          alt="logo"
        />
      </div>
      <div className={styles.skills}>
        {skills.map((skill) => {
          return (
            <div key={skill} className={styles.skill}>
              {skill}
            </div>
          );
        })}
      </div>
      <div className={styles.projects}>
        {projects.map((project) => {
          return (
            <div key={project} className={styles.project}>
              {project}
            </div>
          );
        })}
      </div>
      <div className={styles.roleDesc}>{roleDesc}</div>
      <div className={styles.location}>{location}</div>
      <div className={styles.workExp}>
        {workExp.map((eachPoint, ind) => {
          return (
            <div key={ind} className={styles.project}>
              {eachPoint}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpTile;
