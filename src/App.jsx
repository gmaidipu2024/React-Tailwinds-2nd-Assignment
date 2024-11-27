
import './App.css'
import Alocate from './assets/Components/Alocate';
import Comments from './assets/Components/Comments';
import Controls from './assets/Components/Controls';
import Footer from './assets/Components/Footer';
import Getstart from './assets/Components/Getstart';
import Hero from './assets/Components/Hero';
import NavbarList from "./assets/Components/NavbarList";
import Partnar from './assets/Components/Partnar';
import Train from './assets/Components/Train';

function App() {
 

  return ( 
    <>
       
    <div className='overflow-hidden'>
    <NavbarList/>
    <Hero/>
    <Partnar/>
    <Controls/>
    <Train/>
    <Comments/>
    <Alocate/>
    <Getstart/>
    <Footer/>
    </div>
    </>
  )
}

export default App
