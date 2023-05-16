import { type PostDomainReactionType } from '../../../../../../domains';

export interface PostListStoreAddReactionCompletedActionPayload {
  postId: string;
  reaction: PostDomainReactionType;
}
