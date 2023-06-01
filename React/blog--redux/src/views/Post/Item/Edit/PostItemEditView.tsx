import React, { memo, useState, type ChangeEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppInstance } from '../../../../app';
import { createPostTypeEntity } from '../../../../data';
import { createPostDomainEntity, createPostDomainItemGetOperationInput } from '../../../../domains';
import { type PostItemEditViewProps } from './PostItemEditViewProps';

export const PostItemEditView: React.FC<PostItemEditViewProps> = memo(
function PostItemEditView ({
  postId,
  displayPageUrl,
}: PostItemEditViewProps): React.ReactElement<PostItemEditViewProps> | null {
  const { controls, hooks } = useAppInstance();

  const navigate = useNavigate();

  const resultOfLoadAction = useMemo(
    () => createPostDomainItemGetOperationInput({ id: postId }),
    [postId]
  );

  const {
    pendingOfLoadAction,
    resultOfLoadCompletedAction,
  } = hooks.Views.Post.Item.useStoreLoadActionOutput({ resultOfLoadAction });

  const entity = resultOfLoadCompletedAction?.data?.item ?? createPostDomainEntity();

  const { data } = entity;

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

  const { dispatchOfSaveAction } = hooks.Views.Post.Item.useStoreSaveActionOutput();

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value); }
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value); }

  const users = hooks.Views.User.List.useStoreState();

  const onSavePostClicked = () => {
    if (title && content) {
      const payload = createPostTypeEntity({
        id: postId,
        date: data.date,
        title,
        content,
        userId: users.resultOfSetAction?.data?.items[0].data.id
      });

      dispatchOfSaveAction.run(payload);

      navigate(displayPageUrl);
    }
  }

  return (
    <section>
      {
        pendingOfLoadAction
          ? <controls.Spinner text='Loading post...'/>
          : entity
            ? <>
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
              </>
            : <h2>Post not found!</h2>
      }
    </section>
  );
});
