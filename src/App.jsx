
import './App.css'
import Controls from './assets/Components/Controls';
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
    </div>
    </>
  )
}

export default App
