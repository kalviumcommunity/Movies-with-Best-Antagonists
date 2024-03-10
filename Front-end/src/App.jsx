import './App.css'
import Home from './components/Home/Home'
import List from './components/List/List'
import AboutUs from './components/AboutUs/AboutUs'
import AddEntity from './components/Add/Add'
import Update from './components/Update/Update'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import { Link,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/list' element = {<List/>} />
        <Route path='/AboutUs' element = {<AboutUs/>} />
        <Route path='/AddEntity' element = {<AddEntity/>} />
        <Route path='/update/:id' element = {<Update/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
