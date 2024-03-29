import React from 'react';
import PropTypes from 'prop-types';

export function Spinner({ text = '', size = '5em' }) {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
}

Spinner.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};
