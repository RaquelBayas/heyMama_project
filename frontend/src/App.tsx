import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landpage from './components/Landpage';
import About from './components/About';
import Contact from './components/Contact';
/* import Menu from './components/Menu'
import {Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Search from './components/Search' */
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/*<Route path='/inicio-sesion' element={<InicioSesion/>}/>
        <Route path='/registro' element={<Registro/>}/> */}
      </Routes>
    </BrowserRouter>
  )
    {/* <div className='w-screen h-screen bg-background grid overflow-hidden grid-cols-[100px,1fr]'>
      <Menu/>
      <div className="grid w-full grid-rows-[5em_1fr]">
        <div className='flex flex-col justify-center mt-3 mb-3'>
         <div className='flex justify-evenly'><Search /></div>
          <div className='w-full mt-2 mb-2 border-b border-secondary'></div>
        </div>        
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>   
          </Routes>  
        </div>
      </div>         
    </div> */}
  
}

export default App
