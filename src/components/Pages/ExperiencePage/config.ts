import { CSSProperties } from 'react';

import arriseSVG from '../../../../assets/companies/arrise.svg';
import darwinBoxLogo from '../../../../assets/companies/darwinbox.svg';
import { SKILLS } from '../../../constants';

export interface companyDetailsType {
  companyName: string;
  field: string;
  projects: string[];
  location: string;
  roleDesc: string;
  companyLogo: {
    asset: any;
    styles: Record<string, any>;
  };
  skills: SKILLS[];
  workExp: string[];
  yearOfExp: {
    startDate: string;
    endDate: null | string;
  };
  isCurrent: boolean;
  customStyles?: CSSProperties;
}
export const companyDetails: Record<string, companyDetailsType> = {
  arrise: {
    companyName: 'Arrise powering pragmatic play',
    field: 'Live casinos and slots (Gaming)',
    projects: [
      'Mega Sicbo',
      'Baccarat',
      'Multitable Baccarat',
      'Highflyer',
      'Boomcity',
    ],
    location: 'Hyderabad, Telangana',
    roleDesc: 'Software Development Engineer',
    companyLogo: {
      asset: arriseSVG,
      styles: {
        height: '40px',
        backgroundColor: '#FFFFFF',
      },
    },
    skills: [
      SKILLS.typescript,
      SKILLS.javascript,
      SKILLS.react,
      SKILLS.nodeJs,
      SKILLS.redux,
      SKILLS.webpack,
      SKILLS.websockets,
      SKILLS.gitLab,
    ],
    workExp: [
      `Developed 4 highly scalable live casino games with advanced user interfaces and rich UI animations, achieving game load times of under 1 sec. Collaborated closely with cross-functional teams to deliver these projects within an 18-month timeframe.`,
      `Designed and implemented reusable components with advanced state management in a monorepo architecture, greatly improving the application’s performance and ease of maintenance. while ensuring compatibility with low-end devices.`,
    ],
    yearOfExp: {
      startDate: '05-09-2022',
      endDate: null,
    },
    isCurrent: true,
    customStyles: {
      background: 'linear-gradient(to top, #e4e3f7, #FFFFFF)',
    },
  },
  darwinbox: {
    companyName: 'Darwinbox Digital Solutions',
    field: 'HR Management Software',
    projects: ['Auto Reports and Analytics Generations'],
    location: 'Hyderabad, Telangana',
    roleDesc: 'Software Engineer',
    companyLogo: {
      asset: darwinBoxLogo,
      styles: {
        height: '40px',
        backgroundColor: '#0370BE',
      },
    },
    skills: [
      SKILLS.javascript,
      SKILLS.expressJs,
      SKILLS.nodeJs,
      SKILLS.sql,
      SKILLS.mongoDB,
      SKILLS.gitLab,
    ],
    workExp: [
      `Contributed to analytics by optimizing report generation and enhancing data visualization.`,
      `Facilitated the adoption of Behaviour Driven Development (BDD) practices to enhance code quality.`,
    ],
    yearOfExp: {
      startDate: '02-05-2022',
      endDate: '07-07-2022',
    },
    isCurrent: false,
    customStyles: {
      background: 'linear-gradient(to top, #e0eff9, #FFFFFF)',
    },
  },
  darwinBoxIntern: {
    companyName: 'DarwinBox Digital Solutions',
    field: 'HR Management Software',
    projects: ['User Analytics Platform'],
    location: 'Hyderabad, Telangana',
    roleDesc: 'Engineering Intern',
    companyLogo: {
      asset: darwinBoxLogo,
      styles: {
        height: '40px',
        backgroundColor: '#0370BE',
      },
    },
    skills: [
      SKILLS.javascript,
      SKILLS.expressJs,
      SKILLS.nodeJs,
      SKILLS.mongoDB,
      SKILLS.sql,
      SKILLS.gitLab,
    ],

    workExp: [
      `Engage in training sessions and workshops.`,
      `Shadow experienced employees to learn about various roles.`,
      `Assist in troubleshooting issues reported by users or QA teams.`,
    ],
    yearOfExp: {
      startDate: '01-03-2022',
      endDate: '01-05-2022',
    },
    isCurrent: false,
    customStyles: {
      background: 'linear-gradient(to top, #e0eff9, #FFFFFF)',
    },
  },
};
