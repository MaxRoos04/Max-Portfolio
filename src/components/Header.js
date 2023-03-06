import React from 'react';
import Logo from '../assets/logo.png'; 
import { Link } from 'react-scroll'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        
        <a href='#'>
          <img src={Logo} style={{height:"100px"}}alt=''/>
        </a>

        <Link 
        to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='btn btn-sm cursor-pointer flex items-center justify-center'>
        Work with me
       </Link>

      </div>
    </div>
    </header>;
};

export default Header;
