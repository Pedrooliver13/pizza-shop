// Packages
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

// Components
import { ThemeProvider } from '@/components/themes/theme-provider';

// Routes
import { router } from '@/routes';

// Styles
import './global.css';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop:theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />

        <RouterProvider router={router} />

        <Toaster />
      </HelmetProvider>
    </ThemeProvider>
  );
};
