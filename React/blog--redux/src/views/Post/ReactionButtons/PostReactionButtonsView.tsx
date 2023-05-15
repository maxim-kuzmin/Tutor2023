import React, { memo } from 'react';
import { useAppInstance } from '../../../app';
import { type PostDomainReactionType } from '../../../domains';
import { type PostReactionButtonsViewProps } from './PostReactionButtonsViewProps';

const reactionEmoji = new Map<PostDomainReactionType, string>([
  ['thumbsUp', '👍'],
  ['hooray', '🎉'],
  ['heart', '❤️'],
  ['rocket', '🚀'],
  ['eyes', '👀'],
]);

export const PostReactionButtonsView: React.FC<PostReactionButtonsViewProps> = memo(
function PostReactionButtonsView ({
  postId,
  reactions
}: PostReactionButtonsViewProps): React.ReactElement<PostReactionButtonsViewProps> | null {
  const { hooks } = useAppInstance();

  const { dispatchOfAddReactionCompletedAction } = hooks.Views.Post.List.useStoreAddReactionCompletedActionOutput();

  const reactionButtons: React.ReactElement[] = [];

  reactionEmoji.forEach((emoji, name) => {
    reactionButtons.push(
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => { dispatchOfAddReactionCompletedAction.run({ postId, reaction: name }); }
        }
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return (
    <div>{reactionButtons}</div>
  );
});
