import React, { FC, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavBar: FC<Props> = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className='navbar-brand' to='#'>
          Banking Web App
        </Link>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            {user && userNavItem}
            {!user && visitorNavItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

interface Props {
  user: any;
}


const userNavItem = (
  <Fragment>
    {navItem('/transaction/deposit', 'Deposit')}
    {navItem('/transaction/withdraw', 'Withdraw')}
    {navItem('/transaction/history', 'Transaction History')}
    {navItem('/account/info', ' Account Info')}
    {navItem('/logout', 'Logout')}
  </Fragment>
);

const visitorNavItems = (
  <Fragment>
    {navItem('/login', 'Login')}
    {navItem('/account/new', 'Register')}
  </Fragment>
);

function navItem(path: string, navItemName: string) {
  return <li className='nav-item'>
    <NavLink className='nav-link' to={path}>
      {navItemName}
    </NavLink>
  </li>;
}

