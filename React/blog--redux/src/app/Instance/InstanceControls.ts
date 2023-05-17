import type React from 'react';
import {
  type SpinnerControlProps,
} from '../../common';
import {
  SpinnerControl,
} from '../../controls';

export interface InstanceControls {
  readonly Spinner: React.FC<SpinnerControlProps>;
}

export function createInstanceControls (): InstanceControls {
  return {
    Spinner: SpinnerControl,
  };
}
