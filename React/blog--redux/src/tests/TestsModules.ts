import { type DataTestModules, createDataTestModules } from './Data';

export interface TestsModules {
  readonly Data: DataTestModules;
}

class Implementation implements TestsModules {
  readonly Data: DataTestModules;

  constructor () {
    this.Data = createDataTestModules();
  }
}
export function createTestsModules (): TestsModules {
  return new Implementation();
}
