import { type PostDomainReactionsValueObject } from '../../../domains';

export interface PostReactionButtonsViewProps {
  postId: string;
  reactions: PostDomainReactionsValueObject;
}
