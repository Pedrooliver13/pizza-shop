// Packages
import { Home, Pizza, UtensilsCrossed } from 'lucide-react';
import { ReactElement } from 'react';

// Components
import { Separator } from '@/components/ui/separator';
import { NavLink } from '@/components/nav-link';
import { ThemeToggle } from '@/components/themes/theme-toggle';

export const Header = (): ReactElement => (
  <div className="border-b">
    <div className="flex h-16 items-center gap-6 px-6">
      <Pizza className="h-6 w-6" />

      <Separator orientation="vertical" className="h6" />

      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
        <NavLink to="/orders">
          <UtensilsCrossed className="h-4 w-4" />
          Pedidos
        </NavLink>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  </div>
);
