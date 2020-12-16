import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'tests', text: 'Lab Tests', link: '/', auth: true },
  { id: 'cart', text: 'Cart', link: '/', auth: true },
  { id: 'orders', text: 'Orders', link: '/', auth: true },
  { id: 'login', text: 'Login', link: '/', auth: false },
];

const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className="navigation-item">
      <NavLink to={item.link} exact onClick={props.onChoose}>
        {item.text}
      </NavLink>
    </li>
  )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  )
];

export default navigationItems;
