import React, { memo, useCallback, useEffect, useState } from 'react';
import { useAppInstance } from '../../../app';
import { PostItemAddView, PostItemViewMode, PostListView } from '../../../views';

export const PostListPage: React.FC = memo(
function PostListPage (): React.ReactElement | null {
  const { modules } = useAppInstance();

  const serviceOfPostItemPage = modules.Pages.Post.Item.getService();

  const [shouldBeReloaded, setShouldBeReloaded] = useState(false);

  useEffect(
    () => {
      if (shouldBeReloaded) {
        setShouldBeReloaded(false);
      }
    },
    [shouldBeReloaded]
  );

  const createDisplayItemPageUrl = useCallback(
    (postId: string) => serviceOfPostItemPage.createUrl({
      postId,
      mode: PostItemViewMode.Display,
    }),
    [serviceOfPostItemPage]
  );

  const handleSaveActionCompleted = useCallback(
    () => {
      setShouldBeReloaded(true);
    },
    []
  );

  return (
    <>
      <PostItemAddView onSaveActionCompleted={handleSaveActionCompleted}/>
      <PostListView createDisplayItemPageUrl={createDisplayItemPageUrl} shouldBeReloaded={shouldBeReloaded}/>
    </>
  );
});
