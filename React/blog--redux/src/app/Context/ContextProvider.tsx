import React, { memo } from 'react';
import { Context, type ContextProviderProps } from '.';

export const ContextProvider: React.FC<ContextProviderProps> = memo(
function ContextProvider ({
  children,
  instanceOfApp
}: ContextProviderProps): React.ReactElement<ContextProviderProps> | null {
  return (
    <Context.Provider value={instanceOfApp}>
      {children}
    </Context.Provider>
  )
});
