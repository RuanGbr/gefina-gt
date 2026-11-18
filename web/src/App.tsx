import { BrowserRouter, NavLink, Route, Routes } from 'react-router';

import DashboardPage from './DashboardPage';
import InvoicePage from './InvoicePage';

export default function App() {
  function apply(isActive: boolean) : string{
  const base = 'block px-3 py-2 rounded-control hover:bg-surface-raised hover:text-text hover:font-medium'
  
  if(isActive) return `${base} bg-surface-raised font-medium`
  
  return `${base} text-text-muted`
  }

  return (
    <BrowserRouter>
      <aside className="fixed w-60 top-0 bottom-0 flex flex-col gap-8 p-6 bg-surface border-r border-border">
        <header className="text-xl text-center uppercase font-bold">Gefina</header>
        <nav>
          <ul className='flex flex-col gap-1'>
            <li>
              <NavLink  className={({isActive}) => apply(isActive)} to="/">Painel Inicial</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => apply(isActive)} to="/faturas">Faturas</NavLink>
            </li>
          </ul >
        </nav>
      </aside>
      <main className="ml-60 p-4">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/faturas" element={<InvoicePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
