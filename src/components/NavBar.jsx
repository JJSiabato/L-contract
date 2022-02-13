import React from 'react'
import { SiAnaconda } from 'react-icons/si';
import {MdEmail, MdNotificationsActive, MdSettings, MdMenu} from 'react-icons/md'
import { useState } from 'react';
import MenuBar from './MenuBar';


export const testImg ="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
const NavBar = () => {
   const [menu, setMenu] = useState(false)
    console.log(menu)
    
  return (
    <div className='navbar'>
        <div className='brand'>
            <SiAnaconda className='rotat'/>
        </div>
        <div><h3>L contract</h3></div>     
        <div className='notificationZone'>
            <MdSettings/>
            <MdNotificationsActive/>
            <MdEmail/>
            <div className='avatar'>                
                <a onClick={()=>{setMenu(!menu)}}><img src={testImg} alt="" /> </a>               
            </div>
        </div>
        <div className='burger'>
           <button onClick={()=>setMenu(!menu)}><MdMenu/></button> 
        </div>
        <MenuBar className={menu ? 'menuBar active' : 'menuBar'}/>
    </div>
  )
  
}

export default NavBar