import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-950 p-4'>
      <h1 className='text-wrap text-2xl mb-4 text-white'>Employee Manager</h1>
      <ul className='flex space-x-20'>
        <li>
          <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
        </li>
        <li>
          <Link to="/showemp" className='text-white hover:text-gray-300'>Show Employee</Link>
        </li>
        {/* <li>
          <Link to="/signin" className='text-white hover:text-gray-300'>Sign-in</Link>
        </li>
        <li>
          <Link to="/signup" className='text-white hover:text-gray-300'>Sign-up</Link>
        </li>  */}
        {/* <li>
          <Link to="/update" className='text-white hover:text-gray-300'>Update-employee</Link>
        </li> */}
        <li>
          <Link to="/add" className='text-white hover:text-gray-300'>Add employee</Link>
        </li>      
       
      </ul>
    </nav>
  );
};

export default Navbar;
