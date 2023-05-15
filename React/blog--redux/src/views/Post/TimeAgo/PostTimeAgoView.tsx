import React, { memo } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { type PostTimeAgoViewProps } from './PostTimeAgoViewProps';

export const PostTimeAgoView: React.FC<PostTimeAgoViewProps> = memo(
function PostTimeAgoView ({
  timestamp,
}: PostTimeAgoViewProps): React.ReactElement<PostTimeAgoViewProps> {
  let timeAgo = '';

  if (timestamp) {
    const date = parseISO(timestamp);

    const timePeriod = formatDistanceToNow(date);

    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
});
