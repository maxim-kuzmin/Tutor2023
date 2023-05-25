import React, { memo, useCallback } from 'react';
import { useAppInstance } from '../../../app';

export const AppNotificationView: React.FC = memo(
function AppNotificationView (): React.ReactElement | null {
  const { hooks } = useAppInstance();

  const component = hooks.Controls.Notification.useComponent();

  const { dataOfSetAction } = hooks.Views.App.Notification.useStoreState();

  const onActionCompleted = useCallback(() => {
      if (dataOfSetAction) {
        component.show(dataOfSetAction);
      }
    },
    [component, dataOfSetAction]
  );

  hooks.Views.App.Notification.useStoreClearActionOutput({
    onActionCompleted
  });

  return (
      <>
          {component.content}
      </>
  );
});
