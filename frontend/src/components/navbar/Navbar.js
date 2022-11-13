import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <h1>MixIt</h1>
        <NavLink>Create</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
