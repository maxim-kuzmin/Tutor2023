import React, { memo } from 'react';
import { useAppInstance } from '../../../app';
import { type PostAuthorViewProps } from './PostAuthorViewProps';

export const PostAuthorView: React.FC<PostAuthorViewProps> = memo(
function PostAuthorView ({
  userId
}: PostAuthorViewProps): React.ReactElement<PostAuthorViewProps> | null {
  const { hooks } = useAppInstance();

  const { payloadOfSetAction } = hooks.Views.User.List.useStoreState();

  const entity = payloadOfSetAction?.data?.find((item) => item.data.id === userId);

  return (
    <span>by {entity ? entity.data.name : 'Unknown author'}</span>
  );
});
