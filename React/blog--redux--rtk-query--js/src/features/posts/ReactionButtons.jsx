import React from 'react';

import { useAddReactionMutation } from '../api/apiSlice';

import propTypes from './propTypes';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

export function ReactionButtons({ post }) {
  const [addReaction] = useAddReactionMutation();

  const reactionButtons = Object.entries(reactionEmoji).map(([reactionName, emoji]) => (
    <button
      key={reactionName}
      type="button"
      className="muted-button reaction-button"
      onClick={() => addReaction({ postId: post.id, reaction: reactionName })}
    >
      {emoji}
      {' '}
      {post.reactions[reactionName]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
}

ReactionButtons.propTypes = {
  post: propTypes.post,
};
