import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from './context';
const Navbar = () => {
  const {openSidebar} = useGlobalContext()
    return ( 
       <nav>
           <div className="nav-center">
             <div className="logo">
                <h2>Winn-<span>Cocktail</span></h2>
             </div>
             <div>
              <ul className="links">
                  <li>
                    <NavLink to={"/"} activeClassName="active" className='a'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/training"}>Training</NavLink>
                  </li>
              </ul>
             </div>
             <div className='menubar' onClick={openSidebar}> 
                <GiHamburgerMenu />
             </div>
           </div>
       </nav>
     );
}
 
export default Navbar;