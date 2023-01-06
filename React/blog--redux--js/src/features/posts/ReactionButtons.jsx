import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

export function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="muted-button reaction-button"
      onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
    >
      {emoji}
      {' '}
      {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
}

ReactionButtons.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    reactions: PropTypes.objectOf(PropTypes.number),
  }),
};
