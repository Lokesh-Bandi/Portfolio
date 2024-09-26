import { useState, type FunctionComponent, type ReactElement } from 'react';

import { useModifiers } from '../hooks/useModifiers';

import styles from './Navbar.module.css';

interface NavbarProps {}
const NAV_ITEMS = ['Home', 'Experience', 'Education', 'Projects', 'About'];
const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
  const [actveTab, setActiveTab] = useState(NAV_ITEMS[0]);
  const onNavItemClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>{'Lokesh Bandi'}</div>
      <div className={styles.navItems}>
        {NAV_ITEMS.map((eachItem) => {
          return (
            <NavItem
              key={eachItem}
              title={eachItem}
              isActive={actveTab === eachItem}
              onNavItemClick={onNavItemClick}
            />
          );
        })}
        <div className={styles.contactBox}>{'Contact us'}</div>
      </div>
    </div>
  );
};

export default Navbar;

interface NavItemProps {
  title: string;
  onNavItemClick: (a: string) => void;
  isActive: boolean;
}
export const NavItem: FunctionComponent<NavItemProps> = ({
  title,
  onNavItemClick,
  isActive,
}) => {
  const mods = useModifiers(
    styles,
    'navItem',
    {
      active: isActive,
    },
    {
      isWithBaseClass: true,
    }
  );
  return (
    <div key={title} className={mods} onClick={() => onNavItemClick(title)}>
      {title}
    </div>
  );
};
