import React from 'react'
import NavBar from '../components/NavBar'
import SiderBar from '../components/SiderBar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Generator from './Generator'
import Setting from './Setting'
import Lastest from '../components/last/Lastest'
import { AuthProvider } from '../context/AuthContext'

const Home = () => {
  return (
    <>
      <AuthProvider>
        <NavBar/>
        <Router>
          <div className='workSpace'>
            <div className='boxSiderBar'><SiderBar/></div>
            <div className='layOutWork'>
            <Routes>               
                    <Route path='/' component={<Home/>}/>
                    <Route path='/generator' element={<Generator/>}/>
                    <Route path='/latest' element={<Lastest/>}/>
                    <Route path='/setting' element={<Setting/>}/>
            </Routes>
            </div>
          </div>   
        </Router>
      </AuthProvider>
    </>
  )
}

export default Home