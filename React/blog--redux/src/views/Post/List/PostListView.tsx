import React, { memo } from 'react';
import { useAppInstance } from '../../../app';

export const PostListView: React.FC = memo(
function PostListView (): React.ReactElement | null {
  const { hooks } = useAppInstance();

  const posts = hooks.Views.Post.List.useStoreState();

  const { payloadOfSetAction } = posts;

  let renderedPosts: React.ReactElement[] | null = null;

  if (payloadOfSetAction) {
    renderedPosts = payloadOfSetAction.map((post) => (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
      </article>
    ));
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
});
