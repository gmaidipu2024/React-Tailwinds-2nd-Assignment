
import './App.css'
import Comments from './assets/Components/Comments';
import Controls from './assets/Components/Controls';
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
    <Getstart/>
    </div>
    </>
  )
}

export default App
