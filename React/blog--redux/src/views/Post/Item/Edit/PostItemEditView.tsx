import React, { memo, useState, type ChangeEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppInstance } from '../../../../app';
import { createPostTypeEntity } from '../../../../data';
import { createPostDomainEntity } from '../../../../domains';
import { type PostItemEditViewProps } from './PostItemEditViewProps';

export const PostItemEditView: React.FC<PostItemEditViewProps> = memo(
function PostItemEditView ({
  postId,
  displayPageUrl,
}: PostItemEditViewProps): React.ReactElement<PostItemEditViewProps> | null {
  const { hooks } = useAppInstance();

  const stateOfPostList = hooks.Views.Post.List.useStoreState();

  const { payloadOfSetAction } = stateOfPostList;

  const entity = useMemo(
    () => payloadOfSetAction?.find(
        (item) => item.data.id === postId
      ) ?? createPostDomainEntity({
        data: createPostTypeEntity({ id: postId })
      }),
    [payloadOfSetAction, postId]
  );

  const { data } = entity;

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

  const navigate = useNavigate()

  const { dispatchOfUpdateCompletedAction } = hooks.Views.Post.List.useStoreUpdateCompletedActionOutput();

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value); }
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value); }

  const onSavePostClicked = () => {
    if (title && content) {
      const payload = createPostDomainEntity({
        data: createPostTypeEntity({
          id: postId,
          title,
          content,
        }),
      });

      dispatchOfUpdateCompletedAction.run(payload);

      navigate(displayPageUrl);
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
});
