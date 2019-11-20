import React from 'react';
import cn from 'classnames';
import './Sidebar.scss';
import PropTypes from 'prop-types';
import { Filters } from '..';

const Sidebar = props => {
  const { name, changeFilter, openBurgerMenu, burgerMenuOpened } = props;

  return (
    <aside className={cn('sidebar', { open: burgerMenuOpened })} onClick={openBurgerMenu}>
      <div className="sidebar__inner" name="sidebar">
        <div className="sidebar__logo">
          <div className="logo">
            <img className="logo__img" src="../../../public/images/icons/logo.svg" />
            <span className="logo__name">BECO</span>
          </div>
        </div>
        <div className="sidebar__filters">
          <Filters name={name} changeFilter={changeFilter} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  openBurgerMenu: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  burgerMenuOpened: PropTypes.bool.isRequired
};
