import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUserById } from '../users/usersSlice';

export function PostAuthor({ userId }) {
  const author = useSelector((state) => selectUserById(state, userId));

  return (
    <span>
      by
      {' '}
      {author ? author.name : 'Unknown author'}
    </span>
  );
}

PostAuthor.propTypes = {
  userId: PropTypes.string,
};
