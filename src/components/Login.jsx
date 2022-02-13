import React from 'react';
import {SiAnaconda} from 'react-icons/si'

const Login = () => {
 
  return(
      <div className='slidein'>
        <div><h1>L contract</h1></div>
        <div className='logBox'>          
            <div className='logo'><SiAnaconda className='rotat'/></div>
            <form action="">
                <img src="" alt="" />
                <div className='titleForm'>
                  <h1>Bienvenido</h1>
                  <h4>Ingrese su usuario y contraseña</h4>
                  </div>
                <div className='inputs'>                 
                  <input type="text" placeholder='Usuario'  className='inputBoxLog'/>
                  <input type="pass" placeholder='Contraseña' className='inputBoxLog' />
                  <a className='labelLog' href="">Olvidé mi contraseña</a>
                </div>
                <div className='boxButtonLog'><button className='buttonLog'>Ingresar</button><button className='buttonLog'>SignIn</button></div>                
            </form>
        </div>
     </div>
  )
};

export default Login;
