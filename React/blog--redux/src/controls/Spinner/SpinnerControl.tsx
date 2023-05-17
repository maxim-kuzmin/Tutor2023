import React, { memo } from 'react';
import { type SpinnerControlProps } from '../../common';

export const SpinnerControl: React.FC<SpinnerControlProps> = memo(
function SpinnerControl ({
  size,
  text,
}: SpinnerControlProps): React.ReactElement<SpinnerControlProps> {
  return (
    <div className="spinner">
      { text && <h4>{text}</h4>}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
});
