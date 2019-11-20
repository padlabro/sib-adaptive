import React from 'react';
import cn from 'classnames';
import './Header.scss';
import PropTypes from 'prop-types';

const Header = props => {
  const { name, scroll, burgerMenuOpened, scrollMobile } = props;

  return (
    <header className={cn('header', { fixed: scroll })}>
      <h1 className="header__title">{name}</h1>
      <div className={cn('header__input', { scroll })}>
        <img
          className={cn('input__img', { hidden: scrollMobile })}
          src="../../../public/images/icons/search.svg"
        />
        <form>
          <input
            className={cn('input', { burger: burgerMenuOpened, 'scroll-mobile': scrollMobile })}
            placeholder="Какой магазин вам нужен?"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  name: PropTypes.string.isRequired,
  scroll: PropTypes.bool.isRequired,
  burgerMenuOpened: PropTypes.bool.isRequired,
  scrollMobile: PropTypes.bool.isRequired
};
