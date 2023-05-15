import React, { memo } from 'react';
import { type PostItemViewProps } from './PostItemViewProps';

export const PostItemView: React.FC<PostItemViewProps> = memo(
function PostItemView ({
  postId
}: PostItemViewProps): React.ReactElement<PostItemViewProps> {
  return (
    <>
      <h2>PostItemView: {postId}</h2>
    </>
  );
});
