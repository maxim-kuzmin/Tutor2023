import { useMemo } from 'react';
import { useAppInstance } from '../../../app';
import {
  type UserListStoreResource,
  type UserListStoreHooks,
} from '../../../features';
import { useStoreClearActionDispatch } from './Hooks/Actions/Clear/UserListStoreClearActionDispatchHook';
import { useStoreClearActionOutput } from './Hooks/Actions/Clear/UserListStoreClearActionOutputHook';
import { useStoreLoadActionDispatch } from './Hooks/Actions/Load/UserListStoreLoadActionDispatchHook';
import { useStoreLoadActionOutput } from './Hooks/Actions/Load/UserListStoreLoadActionOutputHook';
import {
  useStoreLoadCompletedActionDispatch
} from './Hooks/Actions/LoadCompleted/UserListStoreLoadCompletedActionDispatchHook';
import { useStoreSetActionDispatch } from './Hooks/Actions/Set/UserListStoreSetActionDispatchHook';
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
    useStoreClearActionDispatch,
    useStoreClearActionOutput,
    useStoreLoadActionDispatch,
    useStoreLoadActionOutput,
    useStoreLoadCompletedActionDispatch,
    useStoreSetActionDispatch,
    useStoreSetActionOutput,
    useStoreState
  };
}
