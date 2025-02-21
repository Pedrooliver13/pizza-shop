// Packages
import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { QueryClientProvider } from '@tanstack/react-query';

// Components
import { ThemeProvider } from '@/components/themes/theme-provider';

// Routes
import { router } from '@/routes';

// Libs
import { queryClient } from '@/lib/react-query';

// Styles
import './global.css';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop:theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>

        <Toaster />
      </HelmetProvider>
    </ThemeProvider>
  );
};
