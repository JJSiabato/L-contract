import React from 'react'
import Data from './dataUser.json'

const Lastest = () => {
    console.log(Data.usuarios)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cedula</th>
                    <th>Telefono</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
           { Data.usuarios.map((elemento)=>{ 
               return(       
                    <tr key={elemento.id}>
                        <td>{elemento.name}</td>
                        <td>{elemento.di}</td>
                        <td>{elemento.phone}</td>
                        <td>{elemento.date}</td>
                        <td>{elemento.amount}</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>                
           )})}
           </tbody>     
        </table>
    </div>
  )
}

export default Lastest