import React from 'react'
import {MdEmail, MdNotificationsActive, MdSettings, MdMenu} from 'react-icons/md'
import { testImg} from './NavBar'


const MenuBar = (props) => {
  return (
    <div className={props.className}>
        <div className='profile'>
            <div className='avatar'>                
                    <a><img src={testImg} alt="" /> </a>               
            </div>
        </div>
        <nav>
            <ul>
                <li><MdEmail/><span>Correo</span></li>
                <li><MdNotificationsActive/><span>Notificaciones</span></li>
                <li><MdSettings/><span>Configuración</span></li>
            </ul>
        </nav>
    </div>
  )
}

export default MenuBar