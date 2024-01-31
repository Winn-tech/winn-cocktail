import React, { useContext, useState } from 'react';
import CockTailList from '../components/cockTailList';
import SearchForm from '../components/searchForm';
import SideBar from '../components/sideBar';
import BackToTop from '../components/toTopButton';
import Footer from '../components/footer';

const Home = () => {
     return ( 
         <main>
             <SideBar/>
             <SearchForm/>
             <CockTailList/>
             <Footer/>
             <BackToTop/>
         </main>
      );
}
 
export default Home;
