import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'
import SideBarContext from './contexts/SideBarContext'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
     </Routes>
     <SideBarContext/>
     <Sidebar/>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
