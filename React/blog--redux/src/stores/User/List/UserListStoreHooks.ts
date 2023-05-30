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

interface Options {
  readonly pathOfUserListStoreResource: string;
}

export function createUserListStoreHooks ({
  pathOfUserListStoreResource,
}: Options): UserListStoreHooks {
  function useResource (): UserListStoreResource {
    const { hooks } = useAppInstance();

    const translator = hooks.Features.App.Localization.useTranslator(pathOfUserListStoreResource);

    const tOperationNameForGet = translator.translate('@@OperationNameForGet');

    const { language } = translator;

    return useMemo<UserListStoreResource>(
      () => ({
        getOperationNameForGet: () => tOperationNameForGet,
        language
      }),
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
