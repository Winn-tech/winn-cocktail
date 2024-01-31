import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return ( 
       <main className={isSidebarOpen? 'show sidebar' :'sidebar'}>
          <section className='sidebar-center'>
            <div className="head">
               <div className="logo">
                  <h2>Winn-<span>Cocktail</span></h2>
               </div>         
               <div className="cancel" onClick={closeSidebar}>
                  <FaTimes />
               </div>
            </div>
            <div className='nav'>
               <ul className="links" onClick={closeSidebar}>
                     <li>
                     <Link to={"/"}>Home</Link>
                     </li>
                     <li>
                     <Link to={"/about"}>About</Link>
                     </li>
                     <li>
                     <Link to={"/training"}>Training</Link>
                     </li>
               </ul>
            </div>
          </section>
       </main>
     );
}
 
export default SideBar;
