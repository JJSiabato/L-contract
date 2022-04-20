import React, { useState } from 'react'
import { ButtonCont, ButtonSm, Formulario, Titles } from '../assets/elements'
import Form from '../components/Form'
import Data from '../assets/db.json'

const Generator = () => {
const [db,setDb] = useState(Data.usuarios)
const [dataToEdit, setDataToEdit] = useState(null )

const createData = (data)=>{
  setDb([...db, data])
  console.log(db)
};
const updateData = ()=>{
  alert("el usuario ya se encuentra en la base de datos")
};
const deleteData = ()=>{};


  return (
    <div id='content'>
    <Titles><h1>Ingrese información</h1></Titles>
      
        <Form createData={createData} updateData={updateData}/>

    </div>
  )
}

export default Generator