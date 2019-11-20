import React from 'react';
import './Filters.scss';
import cn from 'classnames';
import arr from './arr';
import { Icon } from '..';

const Filters = props => {
  const { name, changeFilter } = props;

  const renderItems = () => {
    const filtersList = arr.map(item => (
      <button
        key={item.name}
        type="button"
        className={cn('filter', { active: name === item.name })}
        name={item.name}
        onClick={changeFilter}
      >
        {name === item.name ? (
          <Icon className="filter__icon" name={item.img} size={24} />
        ) : (
          <Icon className="filter__icon" name={item.img} />
        )}
        <p className="filter__title">{item.name}</p>
      </button>
    ));
    return filtersList;
  };
  const items = renderItems();
  return items;
};

export default Filters;
