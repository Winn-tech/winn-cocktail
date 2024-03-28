import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import './styles/navbar.css'
import './styles/footer.css'
import './styles/backtotop.css'
import './styles/loader.css'
import './App.css'
import Navbar from './components/navbar';
import About from './pages/about';
import Training from './pages/training';
import SingleCockTail from './pages/singleCockTail';

function App() {

  return (
  
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/singleCocktail/:id' element={<SingleCockTail/>}/>
          <Route path='/*' element={<About/>}/>
        </Routes>
        
      </>
  );
}

export default App;
