
import './App.css'
import Controls from './assets/Components/Controls';
import Hero from './assets/Components/Hero';
import NavbarList from "./assets/Components/NavbarList";
import Partnar from './assets/Components/Partnar';

function App() {
 

  return ( 
    <>
       
    <div className='overflow-hidden'>
    <NavbarList/>
    <Hero/>
    <Partnar/>
    <Controls/>
    </div>
    </>
  )
}

export default App
