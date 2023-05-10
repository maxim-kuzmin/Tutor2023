import React, { memo } from 'react';

export const AppNavbarView: React.FC = memo(
function AppNavbarView (): React.ReactElement | null {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  );
});
