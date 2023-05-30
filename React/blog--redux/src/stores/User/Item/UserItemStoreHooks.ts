import { useMemo } from 'react';
import { useAppInstance } from '../../../app';
import { type UserItemStoreHooks, type UserItemStoreResource } from '../../../features';
import { useStoreClearActionOutput } from './Hooks/Actions/Clear/UserItemStoreClearActionOutputHook';
import { useStoreDeleteActionOutput } from './Hooks/Actions/Delete/UserItemStoreDeleteActionOutputHook';
import { useStoreLoadActionOutput } from './Hooks/Actions/Load/UserItemStoreLoadActionOutputHook';
import { useStoreSaveActionOutput } from './Hooks/Actions/Save/UserItemStoreSaveActionOutputHook';
import { useStoreSetActionOutput } from './Hooks/Actions/Set/UserItemStoreSetActionOutputHook';
import { useStoreState } from './Hooks/UserItemStoreStateHook';

interface Options {
  readonly pathOfUserItemStoreResource: string;
}

export function createUserItemStoreHooks ({
  pathOfUserItemStoreResource,
}: Options): UserItemStoreHooks {
  function useResource (): UserItemStoreResource {
    const { hooks } = useAppInstance();

    const translator = hooks.Features.App.Localization.useTranslator(pathOfUserItemStoreResource);

    const tOperationNameForDelete = translator.translate('@@OperationNameForDelete');
    const tOperationNameForGet = translator.translate('@@OperationNameForGet');
    const tOperationNameForSave = translator.translate('@@OperationNameForSave');

    const { language } = translator;

    return useMemo<UserItemStoreResource>(
      () => ({
        getOperationNameForDelete: () => tOperationNameForDelete,
        getOperationNameForGet: () => tOperationNameForGet,
        getOperationNameForSave: () => tOperationNameForSave,
        language
      }),
      [
        tOperationNameForDelete,
        tOperationNameForGet,
        tOperationNameForSave,
        language
      ]
    );
  }

  return {
    useResource,
    useStoreClearActionOutput,
    useStoreDeleteActionOutput,
    useStoreLoadActionOutput,
    useStoreSaveActionOutput,
    useStoreSetActionOutput,
    useStoreState
  };
}
