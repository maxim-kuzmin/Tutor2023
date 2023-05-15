import React, { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppInstance } from '../../../app';
import { PostItemEditView, PostItemView, PostItemViewMode } from '../../../views';
import { type PostItemPageProps } from './PostItemPageProps';

export const PostItemPage: React.FC<PostItemPageProps> = memo(
function PostItemPage ({
  mode
}: PostItemPageProps): React.ReactElement<PostItemPageProps> {
  const urlParams = useParams();

  const postId = urlParams.postId ?? '';

  const { modules } = useAppInstance();

  const serviceOfPostItemPage = modules.Pages.Post.Item.getService();

  const displayPageUrl = useMemo(
    () => serviceOfPostItemPage.createUrl({
      postId,
      mode: PostItemViewMode.Display,
    }),
    [postId, serviceOfPostItemPage]
  );

  const editPageUrl = useMemo(
    () => serviceOfPostItemPage.createUrl({
      postId,
      mode: PostItemViewMode.Edit,
    }),
    [postId, serviceOfPostItemPage]
  );

  return (
    mode === PostItemViewMode.Display
      ? <PostItemView postId={postId} editPageUrl={editPageUrl}/>
      : <PostItemEditView postId={postId} displayPageUrl={displayPageUrl}/>
  );
});
