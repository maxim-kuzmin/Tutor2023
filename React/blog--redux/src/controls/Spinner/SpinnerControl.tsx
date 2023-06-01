import React, { memo } from 'react';
import { type SpinnerControlProps } from '../../common';

export const SpinnerControl: React.FC<SpinnerControlProps> = memo(
function SpinnerControl ({
  size,
  text,
}: SpinnerControlProps): React.ReactElement<SpinnerControlProps> {
  const width = size ?? '5em';

  const header = text ? <h4>{text}</h4> : null

  return (
    <div className="spinner">
       {header}
      <div className="loader" style={{ height: width, width }} />
    </div>
  );
});
