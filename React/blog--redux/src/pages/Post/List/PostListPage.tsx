import React, { memo, useCallback } from 'react';
import { useAppInstance } from '../../../app';
import { PostItemAddView, PostItemViewMode, PostListView } from '../../../views';

export const PostListPage: React.FC = memo(
function PostListPage (): React.ReactElement | null {
  const { modules } = useAppInstance();

  const serviceOfPostItemPage = modules.Pages.Post.Item.getService();

  const createDisplayItemPageUrl = useCallback(
    (postId: string) => serviceOfPostItemPage.createUrl({
      postId,
      mode: PostItemViewMode.Display,
    }),
    [serviceOfPostItemPage]
  );

  return (
    <>
      <PostItemAddView/>
      <PostListView createDisplayItemPageUrl={createDisplayItemPageUrl}/>
    </>
  );
});
