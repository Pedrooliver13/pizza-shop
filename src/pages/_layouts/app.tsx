// Packages
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = (): ReactElement => {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
