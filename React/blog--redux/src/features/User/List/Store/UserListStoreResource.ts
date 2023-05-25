import { type LocalizationResource } from '../../../../common';

export interface UserListStoreResource extends LocalizationResource {
  readonly getOperationNameForGet: () => string;
}
