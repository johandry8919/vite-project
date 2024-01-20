import { Route,  Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Otros from './components/ERROR/Otros'
import Footer from './layouts/footer/Fooder'
import './App.css'
import Nav from './layouts/Nav/Nav'
import Header from './layouts/Header/Header'

function App() {


  return (
    <>
     <div className='app'>
     <Nav/>
     <Header/>
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



