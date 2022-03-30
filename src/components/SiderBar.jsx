import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineArrowDropDown, MdSwapHorizontalCircle, MdHome, MdOutlineEditNote, MdVerifiedUser, MdSettingsInputComposite} from 'react-icons/md'
import {VscNewFile} from 'react-icons/vsc'
import {BiCaretRight} from 'react-icons/bi'
import {AiOutlineFundView} from 'react-icons/ai'

const SiderBar = () => {
    const [show, setShow] = useState(false)
    const [dropdown, setDropdown] = useState(false)


return (
    <>
        <nav  className={show ? 'siderBar' : 'siderBar active'}>
            <div className={show ?'nav-brand':'nav-brand active'}>
               <a onClick={()=>setShow(!show)}><MdSwapHorizontalCircle/></a> 
            </div>
            <ul className={show ? 'siderBar-items' : 'siderBar-items active'}>                
                <li className='nav-text'><Link to='/'><MdHome/><span>Inicio</span></Link></li>  
                <li className='nav-text'><a onClick={()=>setDropdown(!dropdown)}><MdOutlineEditNote/><span>Contrato</span><BiCaretRight/></a></li> 
                        <ul className={dropdown ? 'dropdown  active': 'dropdown'}>
                            <li className='nav-text'><Link to='/generator'><VscNewFile/><span>Generar nuevo</span></Link></li>
                            <li className='nav-text'><Link to='/viewDoc'><AiOutlineFundView/><span>Visualizar</span></Link></li>
                        </ul>
                <li className='nav-text'><Link to='/latest'><MdVerifiedUser/><span>Ultimos</span></Link></li>
                <li className='nav-text'><Link to='/setting'><MdSettingsInputComposite/><span>Configuración</span></Link></li>
            </ul>
        </nav>
    </>
  )
}

export default SiderBar