import { PostItemViewMode } from '../../../views';
import { type PostItemPageUrlOptions } from '.';

export interface PostItemPageService {
  readonly createUrl: (options: PostItemPageUrlOptions) => string;
}

class Implementation implements PostItemPageService {
  createUrl (options?: PostItemPageUrlOptions): string {
    let result = '/post';

    let postId = '';

    let mode: PostItemViewMode = PostItemViewMode.Display;

    if (options) {
      if (options.postId) {
        postId = options.postId;
      }

      if (options.mode) {
        mode = options.mode;
      }
    }

    if (postId) {
      result += `/${postId}`;

      if (mode === PostItemViewMode.Edit) {
        result += '/edit';
      }
    }

    return result;
  }
}

export function createPostItemPageService (): PostItemPageService {
  return new Implementation();
}
