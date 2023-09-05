import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navItem.module.css';
import NavItemHeader from './NavItemHeader.jsx';


const NavItem = props => {
  const { label, Icon, to, children } = props.item;

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <NavLink
      to={to}
      className={({isActive}) => (isActive ? `${style.activeNavItem}  ${style.navItem}`: style.navItem)}
    >
      <Icon className={style.navIcon} />
      <span className={style.navLabel}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
