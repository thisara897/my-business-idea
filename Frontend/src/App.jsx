import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import Homepage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <div className='w-full h-screen'>

      {/* <Toaster position='bottom-center'/> */}

      <Routes> 
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/signin' element = {<LoginPage/>}/>
        <Route path='/signup' element = {<RegisterPage/>}/>
        <Route path='/admin/*' element = {<AdminPage/>}/>
      </Routes>
    </div>
  )
}

export default App
