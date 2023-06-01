import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppInstance } from '../../../app';
import { PostAuthorView } from '../Author';
import { PostReactionButtonsView } from '../ReactionButtons';
import { PostTimeAgoView } from '../TimeAgo';
import { type PostItemViewProps } from './PostItemViewProps';
import { createPostDomainItemGetOperationInput } from '../../../domains';

export const PostItemView: React.FC<PostItemViewProps> = memo(
function PostItemView ({
  postId,
  editPageUrl,
}: PostItemViewProps): React.ReactElement<PostItemViewProps> | null {
  const { controls, hooks } = useAppInstance();

  const resultOfLoadAction = useMemo(
    () => createPostDomainItemGetOperationInput({ id: postId }),
    [postId]
  );

  const {
    pendingOfLoadAction,
    resultOfLoadCompletedAction,
  } = hooks.Views.Post.Item.useStoreLoadActionOutput({ resultOfLoadAction });

  const entity = resultOfLoadCompletedAction?.data?.item;

  if (pendingOfLoadAction) {
    return (
      <controls.Spinner text='Loading post...'/>
    );
  }

  if (!entity) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const { data: { title, userId, date, content, id }, reactions } = entity;

  return (
    <section>
      {
        pendingOfLoadAction
          ? <controls.Spinner text='Loading post...'/>
          : entity
            ? <article className="post">
                <h2>{title}</h2>
                <div>
                  <PostAuthorView userId={userId} />
                  <PostTimeAgoView timestamp={date} />
                </div>
                <p className="post-content">{content}</p>
                <PostReactionButtonsView postId={id} reactions={reactions} />
                <Link to={editPageUrl} className="button">
                  Edit Post
                </Link>
              </article>
            : <h2>Post not found!</h2>
      }
    </section>
  );
});
