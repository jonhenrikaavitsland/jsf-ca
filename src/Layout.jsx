import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
