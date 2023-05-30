import { useMemo } from 'react';
import { useAppInstance } from '../../../app';
import { type PostListStoreResource, type PostListStoreHooks } from '../../../features';
import { useStoreClearActionOutput } from './Hooks/Actions/Clear/PostListStoreClearActionOutputHook';
import { useStoreLoadActionOutput } from './Hooks/Actions/Load/PostListStoreLoadActionOutputHook';
import { useStoreSetActionOutput } from './Hooks/Actions/Set/PostListStoreSetActionOutputHook';
import { useStoreState } from './Hooks/PostListStoreStateHook';

interface Options {
  readonly pathOfPostListStoreResource: string;
}

export function createPostListStoreHooks ({
  pathOfPostListStoreResource,
}: Options): PostListStoreHooks {
  function useResource (): PostListStoreResource {
    const { hooks } = useAppInstance();

    const translator = hooks.Features.App.Localization.useTranslator(pathOfPostListStoreResource);

    const tOperationNameForGet = translator.translate('@@OperationNameForGet');

    const { language } = translator;

    return useMemo<PostListStoreResource>(
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
