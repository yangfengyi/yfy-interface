import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>this is header</header>
      <main>
        <Outlet />
      </main>
      <footer>this is footer</footer>
    </div>
  );
};

// MainLayout.withoutLayout = true;
export default memo(MainLayout);
