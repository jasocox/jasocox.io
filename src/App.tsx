import { Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <main className="max-w-2xl mx-auto px-8">
      <Outlet />
    </main>
  );
}

export default App;
