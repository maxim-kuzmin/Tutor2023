import React, { memo } from 'react';
import { PostItemAddView, PostListView } from '../../../views';

export const PostListPage: React.FC = memo(
function PostListPage (): React.ReactElement {
  return (
    <>
      <PostItemAddView/>
      <PostListView/>
    </>
  );
});
