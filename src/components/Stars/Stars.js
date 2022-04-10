import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from '../Star/Star';
import './starsStyle.css';

function Stars({ count }) {
  const isValid = /^(0|-?[1-9]\d{0,5})$/.test(count);
  if (!isValid || count < 1 || count > 5) {
    return null;
  }
  const stars = [];
  for (let i = 1; i <= count; i += 1) {
    stars.push(<Star key={shortid.generate()} />);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
