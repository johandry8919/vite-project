import { Route,  Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Otros from './components/ERROR/Otros'
import Footer from './components/layouts/footer/Fooder'
import './App.css'

function App() {


  return (
    <>
     <div className='app'>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/otros' element={<Otros/>}/>
     
    </Routes>

    <Footer/>



    
     </div>
    
    </>
  )
}

export default App



