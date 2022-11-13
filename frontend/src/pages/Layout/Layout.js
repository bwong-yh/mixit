import { Outlet } from 'react-router-dom';
import './Layout.scss';

// components
import Navbar from '../../components/navbar/Navbar';

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
