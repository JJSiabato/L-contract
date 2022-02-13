import React from 'react'
import { SiderbarDate } from './SiderbarDate'
import { Link } from 'react-router-dom'
import {MdSwapHorizontalCircle} from 'react-icons/md'
import { useState } from 'react'

const SiderBar = () => {
    const [show, setShow] = useState(false)
return (
    <>
        <nav  className={show ? 'siderBar' : 'siderBar active'}>
            <div className={show ?'nav-brand':'nav-brand active'}>
               <a onClick={()=>setShow(!show)}><MdSwapHorizontalCircle/></a> 
            </div>
            <ul className={show ? 'siderBar-items' : 'siderBar-items active'}>
                {SiderbarDate.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        )
                })}
            </ul>
        </nav>
    </>
  )
}

export default SiderBar