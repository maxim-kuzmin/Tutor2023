import React, { memo, useState, type ChangeEvent, useEffect } from 'react';
import { useAppInstance } from '../../../../app';
import { createPostTypeEntity } from '../../../../data';
import { type PostItemAddViewProps } from './PostItemAddViewProps';
import { OperationStatus } from '../../../../common';

export const PostItemAddView: React.FC<PostItemAddViewProps> = memo(
function PostItemAddView ({
  onSaveActionCompleted
}: PostItemAddViewProps): React.ReactElement | null {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSaveCompleted, setIsSaveCompleted] = useState(true);

  const { controls, hooks } = useAppInstance();

  const {
    pendingOfSaveAction,
    dispatchOfSaveAction,
  } = hooks.Views.Post.Item.useStoreSaveActionOutput();

  const {
    statusOfSaveAction,
  } = hooks.Views.Post.Item.useStoreState();

  useEffect(
    () => {
      if (pendingOfSaveAction) {
        setIsSaveCompleted(false);
      }
    },
    [isSaveCompleted, pendingOfSaveAction]
  );

  useEffect(
    () => {
      if (statusOfSaveAction === OperationStatus.Fulfilled && !isSaveCompleted) {
        setIsSaveCompleted(true);

        setTitle('');
        setContent('');

        onSaveActionCompleted();
      }
    },
    [isSaveCompleted, onSaveActionCompleted, statusOfSaveAction]
  );

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value); }
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value); }

  const users = hooks.Views.User.List.useStoreState();

  const onSavePostClicked = () => {
    if (title && content) {
      const payload = createPostTypeEntity({
        title,
        content,
        userId: users.resultOfSetAction?.data?.items[0].data.id
      });

      dispatchOfSaveAction.run(payload);
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      {
        pendingOfSaveAction
          ? <controls.Spinner text='Saving post...'/>
          : <form>
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
      }
    </section>
  );
});
