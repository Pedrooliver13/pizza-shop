// Packages
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Routes
import { router } from '@/routes';

// Styles
import './global.css';

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
};
