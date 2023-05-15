import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { type AppNavbarViewProps } from './AppNavbarViewProps';

export const AppNavbarView: React.FC<AppNavbarViewProps> = memo(
function AppNavbarView ({
  postListPageUrl
}: AppNavbarViewProps): React.ReactElement<AppNavbarViewProps> | null {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to={postListPageUrl}>Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  );
});
