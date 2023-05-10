import { nanoid } from '@reduxjs/toolkit';
import React, { memo, useState, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { actionOfPostListAddCompleted } from '../../../../stores/Post/List/Slice/PostListStoreSliceDefinition';

export const PostItemEditView: React.FC = memo(
function PostItemEditView (): React.ReactElement | null {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value); }
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value); }

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        actionOfPostListAddCompleted({
          id: Number(nanoid()),
          title,
          content,
        })
      );

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
