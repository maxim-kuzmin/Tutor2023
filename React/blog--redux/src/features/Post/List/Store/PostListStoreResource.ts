import { type LocalizationResource } from '../../../../common';

export interface PostListStoreResource extends LocalizationResource {
  readonly getOperationNameForGet: () => string;
}
