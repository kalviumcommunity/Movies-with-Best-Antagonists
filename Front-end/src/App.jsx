import './App.css'
import Home from './components/Home'
import List from './components/List'
import { Link,Route,Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/list' element = {<List/>} />
        <Route path='/AboutUs' element = {<AboutUs/>} />
      </Routes>
    </>
  )
}

export default App
