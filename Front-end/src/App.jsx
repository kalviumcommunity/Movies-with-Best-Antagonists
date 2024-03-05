import './App.css'
import Home from './components/Home'
import List from './components/List'
import AboutUs from './components/AboutUs'
import AddEntity from './components/Add'
import { Link,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/list' element = {<List/>} />
        <Route path='/AboutUs' element = {<AboutUs/>} />
        <Route path='/AddEntity' element = {<AddEntity/>} />
      </Routes>
    </>
  )
}

export default App
