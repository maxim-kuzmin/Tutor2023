import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppInstance } from '../../../app';
import { PostAuthorView } from '../Author';
import { PostTimeAgoView } from '../TimeAgo';
import { PostReactionButtonsView } from '../ReactionButtons';
import { type PostListViewProps } from './PostListViewProps';

export const PostListView: React.FC<PostListViewProps> = memo(
function PostListView ({
  createDisplayItemPageUrl
}: PostListViewProps): React.ReactElement<PostListViewProps> | null {
  const { hooks } = useAppInstance();

  const { payloadOfSetAction } = hooks.Views.Post.List.useStoreState();

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = (payloadOfSetAction ?? [])
    .slice()
    .sort((a, b) => b.data.date.localeCompare(a.data.date));

    const renderedPosts = orderedPosts.map((item) => {
      const { data: { id, title, userId, date, content }, reactions } = item;

      return (
        <article className="post-excerpt" key={id}>
          <h3>{title}</h3>
          <div>
            <PostAuthorView userId={userId} />
            <PostTimeAgoView timestamp={date} />
          </div>
          <p className="post-content">{content.substring(0, 100)}</p>

          <PostReactionButtonsView postId={id} reactions={reactions} />
          <Link to={createDisplayItemPageUrl(id)} className="button muted-button">
            View Post
          </Link>
        </article>
      )
    });

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
});
