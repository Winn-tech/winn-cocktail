import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import {useGlobalContext} from './context'
const BackToTop = () => {
  const { isBackToTopOpen, scrollToTop} = useGlobalContext()
    return ( 
        <div className={isBackToTopOpen? 'btt show' : 'btt' }>
          <button onClick={scrollToTop}> <IoIosArrowUp/></button>
         
        </div>
     );
}
 
export default BackToTop;