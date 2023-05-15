import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import { useAppInstance } from '../../../app';
import { PostAuthorView } from '../Author';
import { PostReactionButtonsView } from '../ReactionButtons';
import { PostTimeAgoView } from '../TimeAgo';
import { type PostItemViewProps } from './PostItemViewProps';

export const PostItemView: React.FC<PostItemViewProps> = memo(
function PostItemView ({
  postId,
  editPageUrl,
}: PostItemViewProps): React.ReactElement<PostItemViewProps> | null {
  const { hooks } = useAppInstance();

  const { payloadOfSetAction } = hooks.Views.Post.List.useStoreState();

  const entity = payloadOfSetAction?.find((item) => item.data.id === postId);

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
      <article className="post">
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
    </section>
  )
});
