export enum SKILLS {
  javascript = 'Javascript',
  typescript = 'Typescript',
  java = 'Java',
  python = 'Python',
  react = 'React',
  webpack = 'Webpack',
  websockets = 'WebSockets',
  nodeJs = 'NodeJs',
  expressJs = 'ExpressJs',
  mongoDB = 'MongoDB',
  sql = 'SQL',
  gitLab = 'GitLab',
  github = 'GitHub',
  redux = 'Redux',
  rxjs = 'RxJs',
}
export const SKILLS_CONFIG = {
  [SKILLS.javascript]: {
    title: 'Javascript',
    bgColor: '#EFD937',
    textColor: '#000000',
  },
  [SKILLS.typescript]: {
    title: 'Typescript',
    bgColor: '#0676C5',
    textColor: '#F5F5F5',
  },
  [SKILLS.java]: {
    title: 'Java',
    bgColor: '#E4E4E4',
    textColor: '#3D8295',
  },
  [SKILLS.python]: {
    title: 'Python',
    bgColor: '#F7C539',
    textColor: '#316894',
  },
  [SKILLS.react]: {
    title: 'React',
    bgColor: '#1F2128',
    textColor: '#5DD4F2',
  },
  [SKILLS.webpack]: {
    title: 'Webpack',
    bgColor: '#8ACEF4',
    textColor: '#191B1B',
  },
  [SKILLS.websockets]: {
    title: 'WebSockets',
    bgColor: '#F5C033',
    textColor: '#221E1F',
  },
  [SKILLS.nodeJs]: {
    title: 'NodeJs',
    bgColor: '#469535',
    textColor: '#EFEFEF',
  },
  [SKILLS.expressJs]: {
    title: 'ExpressJs',
    bgColor: '#212121',
    textColor: '#EFDA37',
  },
  [SKILLS.gitLab]: {
    title: 'GitLab',
    bgColor: '#FFFFFF',
    textColor: '#F29E2D',
  },
  [SKILLS.github]: {
    title: 'GitHub',
    bgColor: '#F7F7F7',
    textColor: '#0E1017',
  },
  [SKILLS.redux]: {
    title: 'Redux',
    bgColor: '#F7F7F7',
    textColor: '#744FB7',
  },
  [SKILLS.rxjs]: {
    title: 'RxJs',
    bgColor: '#F7F7F7',
    textColor: '#E85693',
  },
  [SKILLS.mongoDB]: {
    title: 'MongoDB',
    bgColor: '#4DA54F',
    textColor: '#152832',
  },
  [SKILLS.sql]: {
    title: 'SQL',
    bgColor: '#0F4C5F',
    textColor: '#D47131',
  },
};

export const ALL_SKILLS = Object.keys(SKILLS_CONFIG);
