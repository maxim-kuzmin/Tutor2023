import React, { memo, useState, type ChangeEvent } from 'react';
import { useAppInstance } from '../../../../app';
import { createPostTypeEntity } from '../../../../data';
import { createPostDomainEntity } from '../../../../domains';

export const PostItemAddView: React.FC = memo(
function PostItemAddView (): React.ReactElement | null {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { hooks } = useAppInstance();

  const { dispatchOfAddCompletedAction } = hooks.Views.Post.List.useStoreAddCompletedActionOutput();

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value); }
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value); }

  const onSavePostClicked = () => {
    if (title && content) {
      const payload = createPostDomainEntity({
        data: createPostTypeEntity({
          title,
          content,
        }),
      });

      dispatchOfAddCompletedAction.run(payload);

      setTitle('');
      setContent('');
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
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
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
});
