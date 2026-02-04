import { Outlet } from 'react-router';
import HamburgerMenu from './components/HamburgerMenu';
import './App.css';

function App() {
  return (
    <>
      <HamburgerMenu />
      <main className="max-w-2xl mx-auto px-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
