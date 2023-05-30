import { type LocalizationResource } from '../../../../common';

export interface PostItemStoreResource extends LocalizationResource {
  readonly getOperationNameForDelete: () => string;
  readonly getOperationNameForGet: () => string;
  readonly getOperationNameForSave: () => string;
}
