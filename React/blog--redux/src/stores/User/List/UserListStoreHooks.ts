import { useMemo } from 'react';
import { useAppInstance } from '../../../app';
import {
  type UserListStoreResource,
  type UserListStoreHooks,
} from '../../../features';
import { useStoreClearActionOutput } from './Hooks/Actions/Clear/UserListStoreClearActionOutputHook';
import { useStoreLoadActionOutput } from './Hooks/Actions/Load/UserListStoreLoadActionOutputHook';
import { useStoreSetActionOutput } from './Hooks/Actions/Set/UserListStoreSetActionOutputHook';
import { useStoreState } from './Hooks/UserListStoreStateHook';
import { getUserListStoreResourcePath } from '.';

export function createUserListStoreHooks (): UserListStoreHooks {
  function useResource (): UserListStoreResource {
    const { hooks } = useAppInstance();

    const translator = hooks.Features.App.Localization.useTranslator(getUserListStoreResourcePath());

    const tOperationNameForGet = translator.translate('@@OperationNameForGet');

    const { language } = translator;

    return useMemo(
      () => {
        const result: UserListStoreResource = {
          getOperationNameForGet: () => tOperationNameForGet,
          language
        };

        return result;
      },
      [
        tOperationNameForGet,
        language
      ]
    );
  }

  return {
    useResource,
    useStoreClearActionOutput,
    useStoreLoadActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
