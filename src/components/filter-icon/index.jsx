import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../../public/images/icons/filter-icons.svg';

const Icon = ({ name, size }) => (
  <svg className="filter__icon" width={size} height={size}>
    <use xlinkHref={`${icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};
Icon.defaultProps = {
  size: undefined
};

export default Icon;
