// Packages
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

export const Dashboard = (): ReactElement => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div>Dashboard</div>
    </>
  );
};
