import React, { memo } from 'react';
import { useAppInstance } from '../../../app';

export const PostListView: React.FC = memo(
function PostListView (): React.ReactElement | null {
  const { hooks } = useAppInstance();

  const stateOfPostList = hooks.Views.Post.List.useStoreState();

  const { payloadOfSetAction } = stateOfPostList;

  let renderedPosts: React.ReactElement[] | null = null;

  if (payloadOfSetAction) {
    renderedPosts = payloadOfSetAction.map((item) => (
      <article className="post-excerpt" key={item.data.id}>
        <h3>{item.data.title}</h3>
        <p className="post-content">{item.data.content.substring(0, 100)}</p>
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
