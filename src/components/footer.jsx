import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    const {scrollToTop} = useGlobalContext()
    return ( 
    <div className="footer">
       <div>
            <div className="logo">
                <h2>Winn-<span>Cocktail</span></h2>
                <p>
                    At Winn-cocktail, we are passionate about the art of mixology
                    and the joy that comes from crafting and savoring exceptional cocktails. 
                </p>
             </div>
             <div>
                <h3>Top Courses</h3>
                <ul>
                    <li>Mixology Basics</li>
                    <li>Spirit Spotlight</li>
                    <li>Cocktail Recipes & Techniques</li>
                </ul>
             </div>

             <div>
                <h3>Pages</h3>
                <ul onClick={scrollToTop}>
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

             <div>
                <h3>Contact</h3>
                <ul>
                    <li>
                        <span><MdOutlineMail /></span> 
                        <span>olugodwin@gmail.com</span>
                    </li>

                    <li>
                        <span><RiTwitterXLine/></span> <span>godwinn_max</span>
                    </li>

                    <li>
                        <span><FaGithub /></span> <span>Github</span>
                    </li>

                </ul>
             </div>

           
             
       </div>
        <p>Developed by Winn 2024</p>
    </div>
     );
}
 
export default Footer;