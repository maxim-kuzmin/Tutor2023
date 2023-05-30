import { type LocalizationResource } from '../../../../common';

export interface UserItemStoreResource extends LocalizationResource {
  readonly getOperationNameForDelete: () => string;
  readonly getOperationNameForGet: () => string;
  readonly getOperationNameForSave: () => string;
}
