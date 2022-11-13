import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to='/'>
          <h1>MixIt</h1>
        </NavLink>
        <NavLink to='/create'>Create</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
