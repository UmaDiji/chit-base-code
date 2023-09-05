import React from 'react';
import NavItem from './navItem/NavItem.jsx';
import { MENU_LIST } from './menu.js';
import style from './sidebar.css';
import { Outlet } from 'react-router-dom';
const Sidebar = props => {
  return (
    <div className='sidebar-parent'>
      <nav className={style.sidebar}>
        {MENU_LIST.map((item, index) => {
          return <NavItem key={`${item.label}-${index}`} item={item} />;
        })}
      </nav>
     <Outlet />
     </div>
  );
};

export default Sidebar;