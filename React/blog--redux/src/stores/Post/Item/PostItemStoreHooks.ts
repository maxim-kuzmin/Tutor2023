import { useMemo } from 'react';
import { useAppInstance } from '../../../app';
import { type PostItemStoreHooks, type PostItemStoreResource } from '../../../features';
import { useStoreClearActionOutput } from './Hooks/Actions/Clear/PostItemStoreClearActionOutputHook';
import { useStoreDeleteActionOutput } from './Hooks/Actions/Delete/PostItemStoreDeleteActionOutputHook';
import { useStoreLoadActionOutput } from './Hooks/Actions/Load/PostItemStoreLoadActionOutputHook';
import { useStoreSaveActionOutput } from './Hooks/Actions/Save/PostItemStoreSaveActionOutputHook';
import { useStoreSetActionOutput } from './Hooks/Actions/Set/PostItemStoreSetActionOutputHook';
import { useStoreState } from './Hooks/PostItemStoreStateHook';

interface Options {
  readonly pathOfPostItemStoreResource: string;
}

export function createPostItemStoreHooks ({
  pathOfPostItemStoreResource,
}: Options): PostItemStoreHooks {
  function useResource (): PostItemStoreResource {
    const { hooks } = useAppInstance();

    const translator = hooks.Features.App.Localization.useTranslator(pathOfPostItemStoreResource);

    const tOperationNameForDelete = translator.translate('@@OperationNameForDelete');
    const tOperationNameForGet = translator.translate('@@OperationNameForGet');
    const tOperationNameForSave = translator.translate('@@OperationNameForSave');

    const { language } = translator;

    return useMemo<PostItemStoreResource>(
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
