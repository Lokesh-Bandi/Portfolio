import AboutPage from '../Pages/AboutPage/AboutPage';
import EducationPage from '../Pages/EducationPage/EducationPage';
import ExperiencePage from '../Pages/ExperiencePage/ExperiencePage';
import HomePage from '../Pages/HomePage/HomePage';
import ProjectsPage from '../Pages/ProjectsPage/ProjectsPage';

export const NAV_ITEMS_ARRAY = [
  'home',
  'experience',
  'education',
  'projects',
  'about',
];
export const NAV_ITEMS = {
  home: {
    name: 'Home',
    component: <HomePage />,
    path: '/home',
  },
  experience: {
    name: 'Experience',
    component: <ExperiencePage />,
    path: '/experience',
  },
  education: {
    name: 'Education',
    component: <EducationPage />,
    path: '/education',
  },
  projects: {
    name: 'Projects',
    component: <ProjectsPage />,
    path: '/projects',
  },
  about: {
    name: 'About',
    component: <AboutPage />,
    path: '/about',
  },
};
