import { useState, type FunctionComponent, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModifiers } from '../hooks/useModifiers';

import { NAV_ITEMS, NAV_ITEMS_ARRAY } from './config';

import styles from './Navbar.module.css';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
  const [actveTab, setActiveTab] = useState(NAV_ITEMS_ARRAY[0]);
  const navigate = useNavigate();
  const onNavItemClick = (tab: string) => {
    setActiveTab(tab);
    navigate(NAV_ITEMS[tab as keyof typeof NAV_ITEMS].path);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>{'Lokesh Bandi'}</div>
      <div className={styles.navItems}>
        {NAV_ITEMS_ARRAY.map((eachItem) => {
          const navItem = NAV_ITEMS[eachItem as keyof typeof NAV_ITEMS];
          return (
            <NavItem
              key={eachItem}
              title={navItem.name}
              itemName={eachItem}
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
  itemName: string;
  onNavItemClick: (a: string) => void;
  isActive: boolean;
}
export const NavItem: FunctionComponent<NavItemProps> = ({
  title,
  itemName,
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
    <div key={title} className={mods} onClick={() => onNavItemClick(itemName)}>
      {title}
    </div>
  );
};
